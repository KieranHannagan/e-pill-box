const { Schema } = require('mongoose');

const pharmacySchema = new Schema(
  {
    pharmacyName: {
      type: String,
      required: true,
      maxlength: 280
    },
    pharmacyPhone: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = pharmacySchema;
