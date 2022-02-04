const testimonialRouter = require("express").Router();
const { TestimonialController } = require("../controllers");

testimonialRouter.get("/", TestimonialController.findAll);

testimonialRouter.post("/", TestimonialController.createOne, TestimonialController.findOneById);

testimonialRouter.delete("/:id", TestimonialController.deleteOne);

module.exports = testimonialRouter;
