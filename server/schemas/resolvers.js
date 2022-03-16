const { AuthenticationError } = require('apollo-server-express');
const { User, Medication } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('medications');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('medications');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('medications');
    },
    medications: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Medication.find(params).sort({ createdAt: -1 });
    },
    medication: async (parent, { _id }) => {
      return Medication.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addMedication: async (parent, args, context) => {
      if (context.user) {
        const medication = await Medication.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { medications: medication._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeMedication: async (parent, { drugId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { medications: { drugId: drugId } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    editDrug: async (parent, { lastFill, daySupply }, context) => {
      if (context.user) {
        const updatedMedication = await User.findOneAndUpdate(
          { _id: context.user._id },
          { ...args, lastFill: lastFill, daySupply: daySupply },
          { new: true }
        ).populate('medications');

        return updatedMedication;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    editPharmacy: async (parent, { pharmacyName, pharmacyPhone }, context) => {
      if (context.user) {
        const updatedMedication = await User.findOneAndUpdate(
          { _id: context.user._id },
          { ...args, pharmacyName: pharmacyName, pharmacyPhone: pharmacyPhone },
          { new: true }
        ).populate('medications');

        return updatedMedication;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
