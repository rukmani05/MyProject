const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password,confirm_pwd, mobile, gender,dob,f_name,b_group,address,roles) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirm_pwd=confirm_pwd;
    this.mobile = mobile;
    this.gender = gender;
    this.dob=dob;
    this.f_name=f_name;
    this.b_group=b_group;
    this.address=address;
    this.roles=roles
  }

  static find(email) {
    return db.execute('SELECT * FROM unacademy.user WHERE email = ?', [email]);
  }
  
  static save(user) {
    return db.execute(
    'INSERT INTO unacademy.user (name, email, password,confirm_pwd,mobile,gender,dob,f_name,b_group,address) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user.name, user.email, user.password,user.confirm_pwd, user.mobile, user.gender,user.dob,user.f_name,user.b_group,user.address]
    );
  }
  static view_user() {
    return db.execute('SELECT  id, name,address,mobile FROM unacademy.user WHERE active=1');
  }
  static updateById(id,name,address,mobile){
    return db.execute(
      'UPDATE unacademy.user SET name=?, address=?, mobile=? WHERE id = ?',[name,address,mobile,id]);
  }
  static delete(id) {
    return db.execute('DELETE FROM unacademy.user WHERE id = ?', [id]);
  }
  static setById(id){
    return db.execute('UPDATE unacademy.user SET active=0  WHERE id = ?',[id]);
  }
}