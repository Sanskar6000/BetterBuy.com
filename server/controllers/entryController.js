const Entries = require('../models/entryModel.js');

const entryController = {
  getEntries: async (req, res) => {
    try {
      const entries = await Entries.find();
      res.json(entries);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createEntries: async (req, res) => {
    try {
      const {
        id,
        image,
        name,
        stars,
        rating,
        price,
        slug,
        description,
        countInStock,
        customername,
        serialnumber,
        issuetime,
        warrantyduration,
        warrantyconditions,
      } = req.body;
      const newEntry = new Entries({
        image,
        name,
        stars,
        rating,
        price,
        slug,
        description,
        countInStock,
        customername,
        serialnumber,
        issuetime,
        warrantyduration,
        warrantyconditions,
        user_id: id,
      });
      await newEntry.save();
      res.json({ msg: 'Created a new Entry' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getEntry: async (req, res) => {
    try {
      const entry = await Entries.findById(req.params.id);
      res.json(entry);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = entryController;
