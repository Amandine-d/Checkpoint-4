const { Testimonial } = require("../models");

const findAll = async (req, res) => {
  try {
    const [results] = await Testimonial.findAll();
    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res, next) => {
  const { firstname, lastname, quote } = req.body;
  try {
    const [results] = await Testimonial.createOne({ firstname, lastname, quote });
    req.id = results.insertId;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Testimonial.deleteOne(id);
    if (result.affectedRows === 0) return res.status(404).send();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findAll, createOne, deleteOne };
