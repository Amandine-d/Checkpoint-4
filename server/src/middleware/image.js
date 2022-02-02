const { Image } = require("../models");

const validateCreateImage = (req, res, next) => {
  const { srcBefore, altBefore, srcAfter, altAfter, description, author, location, project_id } = req.body;
  if (srcBefore && altBefore && srcAfter && altAfter && description && author && location && project_id) {
    const imageInformation = {};
    if (srcBefore) {
      imageInformation.srcBefore = srcBefore;
    }
    if (altBefore) {
      imageInformation.altBefore = altBefore;
    }
    if (srcAfter) {
      imageInformation.srcAfter = srcAfter;
    }
    if (altAfter) {
      imageInformation.altAfter = altAfter;
    }
    if (description) {
      imageInformation.description = description;
    }
    if (author) {
      imageInformation.author = author;
    }
    if (location) {
      imageInformation.location = location;
    }
    if (project_id) {
      imageInformation.project_id = project_id;
    }
    req.imageInformation = imageInformation;
    return next();
  }
  return res.status(422).json({ message: "You forgot something" });
};

const validatePutImage = async (req, res, next) => {
  const { srcBefore, altBefore, srcAfter, altAfter, description, author, location, project_id } = req.body;
  const { id } = req.params;
  try {
    const [result] = await Image.findOneById(id);
    if (!result.length) return res.status(404).send();
    const imageInformation = {};
    if (srcBefore) {
      imageInformation.srcBefore = srcBefore;
    }
    if (altBefore) {
      imageInformation.altBefore = altBefore;
    }
    if (srcAfter) {
      imageInformation.srcAfter = srcAfter;
    }
    if (altAfter) {
      imageInformation.altAfter = altAfter;
    }
    if (description) {
      imageInformation.description = description;
    }
    if (author) {
      imageInformation.author = author;
    }
    if (location) {
      imageInformation.location = location;
    }
    if (project_id) {
      imageInformation.project_id = project_id;
    }
    req.imageInformation = imageInformation;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateImage, validatePutImage };
