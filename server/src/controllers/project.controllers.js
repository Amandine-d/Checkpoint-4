const { Project, Image } = require("../models");

const findAll = async (req, res) => {
  try {
    const [projects] = await Project.findAll();
    projects.map((project) => {
      project.images = [];
      return projects;
    });
    const [images] = await Image.findAll();
    images.forEach((image) => {
      projects.map((project) => {
        if (image.project_id === project.id) {
          project.images.push(image);
        }
        return projects;
      })
    })
    return res.status(200).send(projects);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  if (!id || !Number(id)) return res.status(400).json({ message: "Wrong ID" });
  try {
    const [results] = await Project.findOneById(id);
    if (results.length === 0) return res.status(404).send();
    return res.status(statusCode).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createOne = async (req, res, next) => {
  try {
    const [result] = await Project.createOne(req.projectData);
    req.id = result.insertId;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Project.updateOne(req.projectData, id);
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Project.deleteOne(id);
    if (result.affectedRows === 0) return res.status(404).send();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findAll, findOneById, createOne, updateOne, deleteOne };
