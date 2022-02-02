const imageRouter = require("express").Router();
const { ImageController } = require("../controllers");

const { validateCreateImage, validatePutImage } = require("../middleware/image");

imageRouter.get("/", ImageController.findAll);
imageRouter.get("/:id", ImageController.findOneById);

imageRouter.post("/", validateCreateImage, ImageController.createOne, ImageController.findOneById);

imageRouter.put("/:id", validatePutImage, ImageController.updateOne, ImageController.findOneById);

imageRouter.delete("/:id", ImageController.deleteOne);

module.exports = imageRouter;


module.exports = imageRouter;
