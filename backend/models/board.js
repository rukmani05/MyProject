const db = require('../util/database');

module.exports = class Board_details{
  constructor(board_name) {
    this.board_name = board_name;
  }

  
  
  static save(board_details) {
    return db.execute(
    'INSERT INTO unacademy.board_details (board_name) VALUES (? )',
      [board_details.board_name]
    );
  }
  static delete(id) {
    return db.execute('DELETE FROM unacademy.board_details WHERE id = ?', [id]);
  }
  
  static updateById(id,board_name){
    return db.execute(
      'UPDATE unacademy.board_details SET board_name=? WHERE id = ?',[board_name,id]);
  }
  }
