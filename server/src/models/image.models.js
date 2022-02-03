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

  static createOne(image) {
    const sql = "INSERT INTO image SET ?";
    return connection.promise().query(sql, [image]);
  }

  static updateOne(image, id) {
    const sql = "UPDATE image SET ? WHERE id=?";
    return connection.promise().query(sql, [image, id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM image WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Image;
