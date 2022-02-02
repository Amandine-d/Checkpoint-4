const { connection } = require("../../db-connection");

class Image {
  static findAll() {
    const sql = "SELECT * FROM image";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM image WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(project) {
    const sql = "INSERT INTO image SET ?";
    return connection.promise().query(sql, [project]);
  }

  static updateOne(project, id) {
    const sql = "UPDATE image SET ? WHERE id=?";
    return connection.promise().query(sql, [project, id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM image WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Image;
