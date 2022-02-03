const testimonialRouter = require("express").Router();
const { TestomonialController } = require("../controllers");

testimonialRouter.get("/", TestomonialController.findAll);

testimonialRouter.post("/", TestomonialController.createOne, TestomonialController.findOneById);

testimonialRouter.delete("/:id", TestomonialController.deleteOne);

module.exports = testimonialRouter;
