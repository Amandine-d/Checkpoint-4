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
  const { firstname, quote } = req.body;
  try {
    const [results] = await Testimonial.createOne({ firstname, quote });
    req.id = results.insertId;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  if (!id || !Number(id)) return res.status(400).json({ message: "Wrong ID" });
  try {
    const [results] = await Testimonial.findOneById(id);
    if (results.length === 0) return res.status(404).send();
    return res.status(statusCode).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
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

module.exports = { findAll, createOne, deleteOne, findOneById };
