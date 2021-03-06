const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// const pharmacySchema = require('./Pharmacy');

const medicationSchema = new Schema(
  {
    drugName: {
      type: String,
      required: 'You need to add the drug name!',
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    lastFill: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    daySupply: {
      type: Number 
    },
    pharmacyName: {
      type: String
    },
    pharmacyPhone: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Medication = model('Medication', medicationSchema);

module.exports = Medication;
