const mainRouter = require("express").Router();

const userRouter = require("./user.routes");
const projectRouter = require("./project.routes");
const imageRouter = require("./image.routes");

mainRouter.use("/users", userRouter);
mainRouter.use("/projects", projectRouter);
mainRouter.use("/images", imageRouter);

module.exports = mainRouter;