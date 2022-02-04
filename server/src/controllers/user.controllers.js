const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  if (await User.findOneByEmail(email)) {
    res.status(400).send({ error: "This email address already exists" });
  } else {
    next();
  }
}

const createOne = async (req, res) => {
  console.log(req.body, "req.body");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Incorrect email or password" });
  } try {
    const [result] = await User.createOne(req.userData);
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
      const user = new User({ password: hashedPassword });
      req.id = result.insertId;
      return res.status(201).send(user);
    })
  } catch (err) { return res.status(500).send(err.message); }
}

const comparePassword = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Incorrect email or password" });
  };
  User.findOne({ email })
    .then(existingUser => {
      //Return 401 if user does not exist
      if (!existingUser) {
        return res.status(401).json({ error: "Incorrect email or password" })
      }
      //Compare password
      bcrypt.compare(password, existingUser.password, function (err, result) {
        if (result == true) {
          res.locals.user = existingUser;
          return next();
        }
        res.status(401).json({ error: "Incorrect email or password" })

      })
    })
};

const getToken = async (req, res) => {
  const user = res.locals.user;
  const token = jwt.sign({ email: user.email }, process.env.SECRET);
  return res.status(200).send({ token });
};

const verifyToken = async (req, res, next) => {
  try {
    // const decoded = await jwt.verify(req.body.token, process.env.SECRET);
    jwt.verify(req.query.token, process.env.SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      User.findOne({ email: decoded.email })
        .then(existingUser => {
          if (existingUser) {
            return next();
          } else {
            return res.status(401).json({ error: "Unauthorized" });
          }
        });
    });
  }
  catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    await User.updateOne(req.userData, id);
    return next();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await User.deleteOne(id);
    if (result.affectedRows === 0) return res.status(404).send();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findAll = async (req, res) => {
  try {
    const [results] = await User.findAll();
    return res.status(200).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findOneById = async (req, res) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  if (!id || !Number(id)) return res.status(400).json({ message: "Wrong ID" });
  try {
    const [results] = await User.findOneById(id);
    if (results.length === 0) return res.status(404).send();
    return res.status(statusCode).send(results);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};



module.exports = { createOne, comparePassword, getToken, verifyToken, updateOne, deleteOne, findAll, findOneById }