const db = require('../util/database');

module.exports = class Standard{
  constructor(standard_name,section) {
    this.standard_name = standard_name;
    this.section=section;
  }

  
  
  static save(standard) {
    return db.execute(
    'INSERT INTO unacademy.standard (standard_name) VALUES (? )',
      [standard.standard_name]
    );
  }
  static delete(id) {
    return db.execute('DELETE FROM unacademy.standard WHERE id = ?', [id]);
  }
  static updateById(id,standard_name){
    return db.execute(
      'UPDATE unacademy.standard SET standard_name=? WHERE id = ?',[standard_name,id]);
  }
  static view_standard() {
    return db.execute('SELECT id, standard_name FROM unacademy.standard WHERE active=1');
  }
}