const db = require('../util/database');

module.exports = class Extra_curriculum{
  constructor(interest) {
    this.interest = interest;
  }


    static get_activity() {
        return db.execute('SELECT id, interest FROM unacademy.extra_curriculum WHERE active=1');
      }
  }