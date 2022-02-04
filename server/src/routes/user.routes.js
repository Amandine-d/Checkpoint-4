const userRouter = require("express").Router();
const { UserController } = require("../controllers");
const { validateCreateUser, validatePutUser } = require("../middleware/user");

// userRouter.get("/", UserController.comparePassword, UserController.getToken)
userRouter.get("/users", /* UserController.verifyToken, */ UserController.findAll);
userRouter.get("/users/:id", UserController.findOneById);

userRouter.post("/users", validateCreateUser, UserController.createOne, UserController.findOneById);

userRouter.put("/users/:id", validatePutUser, UserController.updateOne, UserController.findOneById);

userRouter.delete("/users/:id", UserController.deleteOne);

module.exports = userRouter;


module.exports = userRouter;
