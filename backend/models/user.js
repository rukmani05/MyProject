const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password,confirm_pwd, mobile, gender,dob,f_name,b_group,address,roles,image,active) {
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
    this.roles=roles;
    this.image=image;
    this.active=active;
  }

  static find(email) {
    return db.execute('SELECT * FROM unacademy.user WHERE email = ?', [email]);
  }
  static user_profile(id) {
    return db.execute('SELECT img FROM unacademy.user WHERE id = ?', [id]);
  }
  static view_details(id) {
    return db.execute('SELECT name,email,mobile,address,profession_id,image FROM unacademy.user WHERE id = ?', [id]);
  }
  
  static save(user) {
    return db.execute(
    'INSERT INTO unacademy.user (name, email, password,confirm_pwd,mobile,gender,dob,f_name,b_group,address,img) VALUES (?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user.name, user.email, user.password,user.confirm_pwd, user.mobile, user.gender,user.dob,user.f_name,user.b_group,user.address,user.img]
    );
  }
  static view_user() {
    return db.execute('SELECT  id, name,address,mobile,active FROM unacademy.user WHERE active=1');
  }
  static updateById(id,name,address,mobile){
    return db.execute(
      'UPDATE unacademy.user SET name=?, address=?, mobile=? WHERE id = ?',[name,address,mobile,id]);
  }
  static profile_update(id,name,email,mobile,address,profession_id){
    return db.execute(
      'UPDATE unacademy.user SET name=?,email=?, mobile=?, address=? , profession_id=? WHERE id = ?',[name,email,mobile,address,profession_id,id]);
  }
  static addimg(id,image) {
    return db.execute(
    'UPDATE unacademy.user SET image=? WHERE id=?',[image,id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM unacademy.user WHERE id = ?', [id]);
  }
  static set_active(id){
    return db.execute(
      'UPDATE unacademy.user SET user.active=0 WHERE id = ?',[id]);
  }
}