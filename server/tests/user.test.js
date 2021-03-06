const request = require("supertest");
const app = require("../server");
const { query } = require("../db-connection");

const user = {
  email: "test@example.com",
  password: "p@ssw0rd!",
  role: 'admin'
};

describe("app", () => {
  beforeAll(async () => {
    let sql = "SET FOREIGN_KEY_CHECKS=0";
    await query(sql);
    sql = "TRUNCATE TABLE user";
    await query(sql);
    sql = "SET FOREIGN_KEY_CHECKS=1";
    await query(sql);
  });

  it("POST /api/register", async () => {
    expect.assertions(6);

    // User.deleteMany({ "email": user.email }).exec();

    // Sending incorrect informations should return 400
    const resError = await request(app).post("/api/register").send({}).expect(400);
    expect(resError.body).toEqual({ error: "Missing email or password" });

    //Sending correct informations should create a user
    const countBefore = await res.body.id.length();
    const res = await request(app).post("/api/register").send(user).expect(201);
    expect(res.body.email).toEqual(user.email);
    //Make sure password is hashed with bcrypt
    expect(res.body.password).not.toEqual(user.password);
    const regex = /^\$2b\$/
    expect(res.body.password).toMatch(regex);
    const countAfter = await res.body.id.length();
    expect(countAfter).toEqual(countBefore + 1);

    //Sending twice the same email should return 400
    const resDup = await request(app).post("/register").send(user).expect(400);
    expect(resDup.body).toEqual({ error: "User already exists" });

    // User.deleteMany({ "email": user.email }).exec();
  });

  it("POST /login", async () => {
    expect.assertions(3);

    // User.deleteMany({ "email": user.email }).exec();

    const resError = await request(app).post("/api/login").send({}).expect(400);
    expect(resError.body).toEqual({ error: "Incorrect email or password" });

    await request(app).post("/register").send(user).expect(201);
    const resIncorrectPassword = await request(app).post("/login").send({ email: user.email, password: "invalidP@sswOrd" }).expect(401);
    expect(resIncorrectPassword.body).toEqual({ error: "Incorrect email or password" });

    const resCorrectPassword = await request(app).post("/login").send(user).expect(200);
    expect(resCorrectPassword.body.hasOwnProperty("token")).toEqual(true);

    // User.deleteMany({ "email": user.email }).exec();
  })

  it("GET /users", async () => {
    expect.assertions(2);
    //create new user to make sure there is at least one
    // const newUser = new User(user);

    const resUnauthorized = await request(app).get("/users").expect(401);
    await request(app).get("/users?token=invalidToken").expect(401);

    const resRegister = await request(app).post("/register").send(user).expect(201);

    const resCorrectPassword = await request(app).post("/login").send(user).expect(200);
    const token = resCorrectPassword.body.token;
    const res = await request(app).get("/users?token=" + token).expect(200);

    const countUsers = await User.countDocuments().exec();
    expect(res.body.length).toEqual(countUsers);

    // retrieve the first item
    let first = res.body[0];

    //toEqual(1) because we need only email
    expect(Object.keys(first).length).toEqual(1);

    //Delete user
    // newUser.delete();

  });
});
