const { Project } = require("../models");

const validateCreateProject = (req, res, next) => {
  const { title, description, start_date, end_date, tags } = req.body;
  if (title && description && start_date && end_date && tags) {
    const projectInformation = {};
    if (title) {
      projectInformation.title = title;
    }
    if (description) {
      projectInformation.description = description;
    }
    if (start_date) {
      projectInformation.start_date = start_date;
    }
    if (end_date) {
      projectInformation.end_date = end_date;
    }
    if (tags) {
      projectInformation.tags = tags;
    }
    req.projectInformation = projectInformation;
    return next();
  }
  return res.status(422).json({ message: "You forgot something" });
};

const validatePutProject = async (req, res, next) => {
  const { title, description, start_date, end_date, tags } = req.body;
  const { id } = req.params;
  try {
    const [result] = await Project.findOneById(id);
    if (!result.length) return res.status(404).send();
    const projectInformation = {};
    if (title) {
      projectInformation.title = title;
    }
    if (description) {
      projectInformation.description = description;
    }
    if (start_date) {
      projectInformation.start_date = start_date;
    }
    if (end_date) {
      projectInformation.end_date = end_date;
    }
    if (tags) {
      projectInformation.tags = tags;
    }
    req.projectInformation = projectInformation;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateProject, validatePutProject };
