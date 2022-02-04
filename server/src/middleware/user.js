const { User } = require("../models");

const validateCreateUser = (req, res, next) => {
  const { firstname, lastname, password, role, email, experience } = req.body;
  if (firstname && lastname && password && role && email && experience) {
    const userData = {};
    if (firstname) {
      userData.firstname = firstname;
    }
    if (lastname) {
      userData.lastname = lastname;
    }
    if (password) {
      userData.password = password;
    }
    if (role) {
      userData.role = role;
    }
    if (email) {
      userData.email = email;
    }
    if (experience) {
      userData.experience = experience;
    }
    req.userData = userData;
    return next();
  }
  return res.status(422).json({ message: "You forgot something" });
};

const validatePutUser = async (req, res, next) => {
  const { firstname, lastname, password, role, email, experience } = req.body;
  const { id } = req.params;
  try {
    const [result] = await User.findOneById(id);
    if (!result.length) return res.status(404).send();
    const userData = {};
    if (firstname) {
      userData.firstname = firstname;
    }
    if (lastname) {
      userData.lastname = lastname;
    }
    if (password) {
      userData.password = password;
    }
    if (role) {
      userData.role = role;
    }
    if (email) {
      userData.email = email;
    }
    if (experience) {
      userData.experience = experience;
    }
    req.userData = userData;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateUser, validatePutUser };
