const mainRouter = require("express").Router();

const userRouter = require("./user.routes");
const projectRouter = require("./project.routes");
const imageRouter = require("./image.routes");
const testimonialRouter = require("./testimonial.routes");

mainRouter.use("/login", userRouter);
mainRouter.use("/projects", projectRouter);
mainRouter.use("/images", imageRouter);
mainRouter.use("/testimonials", testimonialRouter);

module.exports = mainRouter;