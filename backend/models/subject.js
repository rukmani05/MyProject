const db = require('../util/database');

module.exports = class Subject{
  constructor(subject_name,standard_id,subject_code) {
    this.subject_name = subject_name;
    this.standard_id=standard_id;
    this.subject_code=subject_code;
  }

  
  
  static save(subject) {
    return db.execute(
    'INSERT INTO unacademy.subject (subject_name) VALUES (? )',
      [subject.subject_name]
    );
  }
 
  static updateById(id,subject_name){
    return db.execute(
      'UPDATE unacademy.subject SET subject_name=?  WHERE id = ?',[subject_name,id]);
  }
  static view_subject() {
    return db.execute('SELECT id, subject_name FROM unacademy.subject WHERE active=1');
  }
  static view_sub() {
    return db.execute('SELECT id, subject_name FROM unacademy.subject WHERE active=1');
  }
  static active(id){
    return db.execute(
      'UPDATE unacademy.subject SET active=0  WHERE id = ?',[id]);
  }
}