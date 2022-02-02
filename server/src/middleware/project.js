const { Project } = require("../models");

const validateCreateProject = (req, res, next) => {
  const { title, description, start_date, end_date, tags } = req.body;
  if (title && description && start_date && end_date && tags) {
    const projectData = {};
    if (title) {
      projectData.title = title;
    }
    if (description) {
      projectData.description = description;
    }
    if (start_date) {
      projectData.start_date = start_date;
    }
    if (end_date) {
      projectData.end_date = end_date;
    }
    if (tags) {
      projectData.tags = tags;
    }
    req.projectData = projectData;
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
    const projectData = {};
    if (title) {
      projectData.title = title;
    }
    if (description) {
      projectData.description = description;
    }
    if (start_date) {
      projectData.start_date = start_date;
    }
    if (end_date) {
      projectData.end_date = end_date;
    }
    if (tags) {
      projectData.tags = tags;
    }
    req.projectData = projectData;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateProject, validatePutProject };
