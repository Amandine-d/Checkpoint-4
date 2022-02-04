const imageRouter = require("express").Router();
const { ImageController } = require("../controllers");

const { validateCreateImage } = require("../middleware/image");

imageRouter.get("/", ImageController.findAll);
imageRouter.get("/:id", ImageController.findOneById);

imageRouter.post("/", validateCreateImage, ImageController.uploadFile, ImageController.createOne, ImageController.findOneById);
imageRouter.post("/projects", validateCreateImage, ImageController.uploadFile, ImageController.createOne, ImageController.findOneById);

// imageRouter.put("/:id", validatePutImage, ImageController.updateOne, ImageController.findOneById);

imageRouter.delete("/:id", ImageController.deleteOne);

module.exports = imageRouter;
