const projectRouter = require("express").Router();
const { ProjectController } = require("../controllers");
const { validateCreateProject, validatePutProject } = require("../middleware/project");

projectRouter.get("/", ProjectController.findAll);
projectRouter.get("/:id", ProjectController.findOneById);

projectRouter.post("/", validateCreateProject, ProjectController.createOne, ProjectController.findOneById);

projectRouter.put("/:id", validatePutProject, ProjectController.updateOne, ProjectController.findOneById);

projectRouter.delete("/:id", ProjectController.deleteOne);

module.exports = projectRouter;
