const db = require('../config/connection');
const { User, Medication } = require('../models');
const userSeeds = require('./userSeeds.json');
const medicationSeeds = require('./medicationSeeds.json');

db.once('open', async () => {
  try {
    await Medication.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < medicationSeeds.length; i++) {
      const { _id, username } = await Medication.create(medicationSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            medications: _id
          }
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
