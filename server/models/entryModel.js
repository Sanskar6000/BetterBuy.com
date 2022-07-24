const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stars: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: String,
      required: true,
    },
    customername: {
      type: String,
      required: true,
    },
    serialnumber: {
      type: String,
      required: true,
    },
    issuetime: {
      type: String,
      required: true,
    },
    warrantyduration: {
      type: String,
      required: true,
    },
    warrantyconditions: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Entries', entrySchema);
