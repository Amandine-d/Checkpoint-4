const { connection } = require("../../db-connection");

class Testimonial {
  static findAll() {
    const sql = "SELECT * FROM testimonial";
    return connection.promise().query(sql);
  }

  static createOne(testimonial) {
    const sql = "INSERT INTO testimonial SET ?";
    return connection.promise().query(sql, [testimonial]);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM testimonial WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM testimonial WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Testimonial;
