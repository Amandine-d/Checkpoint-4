const multer = require("multer");
const { Image } = require("../models");

const findAll = async (req, res) => {
  try {
    const [results] = await Image.findAll();
    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  if (!id || !Number(id)) return res.status(400).json({ message: "Wrong ID" });
  try {
    const [results] = await Image.findOneById(id);
    if (results.length === 0) {
      return res.status(404).send()
    } else {
      res.status(statusCode).json(result);
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
};


const createOne = async (req, res, next) => {
  if (req.files.length === 0) {
    return next();
  }
  try {
    const [result] = await Image.createOne(req.imageData);
    req.id = result.insertId;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createFile = async (req, res, next) => {
  {req.files && (
    req.files.map(async (file) => {
      try {
        return await Image.createOne({
          srcBefore: file.filename,
          altBefore: file.originalname.split('0')[0],
          description: req.description,
          location: req.location,
          author: req.author,
          project_id: req.id,
        });
      } catch (err) {
        return res.status(500).send(err.message);
      }
    })
  )};
  return next();
}

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Image.updateOne(req.imageData, id);
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const uploadFile = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, "public/pictures/club-events");
    },
    filename: (_, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage }).single("eventPictureFile");

  upload(req, res, (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      req.picture = JSON.parse(req.body.pictureData);
      next();
    }
  });
}

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await Image.deleteOne(id);
    if (result.affectedRows === 0) return res.status(404).send();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { findAll, findOneById, createOne, updateOne, deleteOne, createFile, uploadFile };
