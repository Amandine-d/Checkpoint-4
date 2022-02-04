const { Image } = require("../models");

const validateCreateImage = (req, res, next) => {
  const { srcBefore, altBefore, /* srcAfter, altAfter, */ description, author, location, project_id, is_poster } = req.body;
  if (srcBefore && altBefore && /* srcAfter && altAfter && */ description && author && location && project_id && is_poster) {
    const imageData = {};
    if (srcBefore) {
      imageData.srcBefore = srcBefore;
    }
    if (altBefore) {
      imageData.altBefore = altBefore;
    }
    // if (srcAfter) {
    //   imageData.srcAfter = srcAfter;
    // }
    // if (altAfter) {
    //   imageData.altAfter = altAfter;
    // }
    if (description) {
      imageData.description = description;
    }
    if (author) {
      imageData.author = author;
    }
    if (location) {
      imageData.location = location;
    }
    if (project_id) {
      imageData.project_id = project_id;
    }
    if (is_poster) {
      imageData.is_poster = is_poster;
    }
    req.imageData = imageData;
    return next();
  }
  return res.status(422).json({ message: "You forgot something" });
};

const validatePutImage = async (req, res, next) => {
  const { srcBefore, altBefore, /* srcAfter, altAfter, */ description, author, location, project_id, is_poster } = req.body;
  const { id } = req.params;
  try {
    const [result] = await Image.findOneById(id);
    if (!result.length) return res.status(404).send();
    const imageData = {};
    if (srcBefore) {
      imageData.srcBefore = srcBefore;
    }
    if (altBefore) {
      imageData.altBefore = altBefore;
    }
    // if (srcAfter) {
    //   imageData.srcAfter = srcAfter;
    // }
    // if (altAfter) {
    //   imageData.altAfter = altAfter;
    // }
    if (description) {
      imageData.description = description;
    }
    if (author) {
      imageData.author = author;
    }
    if (location) {
      imageData.location = location;
    }
    if (project_id) {
      imageData.project_id = project_id;
    }
    if (is_poster) {
      imageData.is_poster = is_poster;
    }
    req.imageData = imageData;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateImage, validatePutImage };
