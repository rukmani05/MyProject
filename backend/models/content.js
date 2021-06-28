const db = require('../util/database');

module.exports = class Content{
  constructor(standard_id,subject_id,title,summary,sub_id,active) {
    
    this.sub_id=sub_id;
    this.title=title;
    this.summary=summary;
    
    this.active=active;
  }

  
  
  static save(content) {
    return db.execute(
    'INSERT INTO unacademy.content (title,summary,sub_id,std_id,links,file_key) VALUES (?,?,?,?,?,?)',
      [content.title,content.summary,content.sub_id,content.std_id,content.links,content.file_key]
    );
  }
  static delete(id) {
    return db.execute('DELETE FROM unacademy.content WHERE id = ?', [id]);
  }
  static updateById(id,title,summary,std_id,sub_id,links){
    return db.execute(
      'UPDATE unacademy.content SET title=?,summary=?,std_id=?,sub_id=?,links=? WHERE id = ?',[title,summary,std_id,sub_id,links,id]);
  }

  static view() {
    return db.execute('SELECT content.id, standard_name,subject_name ,title,summary,links FROM unacademy.content LEFT JOIN unacademy.subject On content.sub_id=subject.id LEFT JOIN unacademy.standard On content.std_id=standard.id WHERE content.active=1 ORDER BY standard.id ASC');
  }
  static active(id){
    return db.execute(
      'UPDATE unacademy.content SET content.active=0 WHERE id = ?',[id]);
  }

  static search(title) {
    return db.execute('SELECT title,summary FROM  unacademy.content WHERE TITLE=?',[title]);
  }
  }