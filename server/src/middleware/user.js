const { User } = require("../models");

const validateCreateUser = (req, res, next) => {
  const { firstname, lastname, password, role, email, experience } = req.body;
  if (firstname && lastname && password && role && email && experience) {
    const userInformation = {};
    if (firstname) {
      userInformation.firstname = firstname;
    }
    if (lastname) {
      userInformation.lastname = lastname;
    }
    if (password) {
      userInformation.password = password;
    }
    if (role) {
      userInformation.role = role;
    }
    if (email) {
      userInformation.email = email;
    }
    if (experience) {
      userInformation.experience = experience;
    }
    req.userInformation = userInformation;
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
    const userInformation = {};
    if (firstname) {
      userInformation.firstname = firstname;
    }
    if (lastname) {
      userInformation.lastname = lastname;
    }
    if (password) {
      userInformation.password = password;
    }
    if (role) {
      userInformation.role = role;
    }
    if (email) {
      userInformation.email = email;
    }
    if (experience) {
      userInformation.experience = experience;
    }
    req.userInformation = userInformation;
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { validateCreateUser, validatePutUser };
