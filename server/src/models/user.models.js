const { connection } = require("../../db-connection");

class User {
  static findAll() {
    const sql = "SELECT * FROM user";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM user WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static async findOneByEmail(email) {
    const sql = "SELECT * FROM user WHERE email=?";
    const [result] = await connection.promise().query(sql, [email]);
    return result.length > 0;
  }

  static createOne(user) {
    const sql = "INSERT INTO user SET ?";
    return connection.promise().query(sql, [user]);
  }

  static updateOne(user, id) {
    const sql = "UPDATE user SET ? WHERE id=?";
    return connection.promise().query(sql, [user, id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM user WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = User;
