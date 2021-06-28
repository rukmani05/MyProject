const db = require('../util/database');

module.exports = class Profession{
  constructor(name) {
    this.name = name;
  }


    static view_profession() {
        return db.execute('SELECT id, name FROM unacademy.profession WHERE active=1');
      }
  }
