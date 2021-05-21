const db = require('../util/database');

module.exports = class Content{
  constructor(standard_id,subject_id,title,summary) {
    this.standard_id=standard_id;
    this.subject_id=subject_id;
    this.title=title;
    this.summary=summary;
  }

  
  
  static save(content) {
    return db.execute(
    'INSERT INTO unacademy.content (title,summary) VALUES (?,?)',
      [content.title,content.summary]
    );
  }
  static delete(id) {
    return db.execute('DELETE FROM unacademy.content WHERE id = ?', [id]);
  }
  static updateById(id,title){
    return db.execute(
      'UPDATE unacademy.content SET title=? WHERE id = ?',[title,id]);
  }

  static find() {
    return db.execute('SELECT standard_name,subject_name ,title,summary FROM unacademy.content LEFT JOIN unacademy.standard On content.standard_id=standard.id LEFT JOIN unacademy.subject On content.subject_id=subject.id');
  }
  

  static search(title) {
    return db.execute('SELECT title,summary FROM  unacademy.content WHERE TITLE=?',[title]);
  }
  }