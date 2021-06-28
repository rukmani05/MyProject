const db = require('../util/database');

module.exports = class Activity_user{
  constructor(id,user_id,activity_id) {
    this.id = id;
    this.user_id=user_id;
    this.activity_id=activity_id;
  }


    static profile_update(activity_user) {
        return db.execute(
            'INSERT INTO unacademy.activity_user (user_id,activity_id) VALUES (?, ? )',
              [activity_user.user_id,activity_user.activity_id]
            );
      }
      static delete_previous(user_id) {
        return db.execute('DELETE  FROM unacademy.activity_user WHERE user_id = ?', [user_id]);
      }
      static view_details(user_id) {
        return db.execute('SELECT  extra_curriculum.id FROM unacademy.activity_user LEFT JOIN unacademy.extra_curriculum On activity_user.activity_id= extra_curriculum.id  WHERE user_id = ?', [user_id]);
      }
     
      //   static view_details(user_id) {​
      //        return db.execute('SELECT  name,email,address,mobile,profession_id,user_id, interest  FROM unacademy.activity_user LEFT JOIN unacademy.extra_curriculum On activity_user.activity_id= extra_curriculum.id LEFT JOIN unacademy.user On activity_user.user_id=user.id  WHERE user_id = ?', [user_id]);
      //      }​
  }

   