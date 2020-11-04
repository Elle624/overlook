class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  returnUser(ref, users) {
    ref.toLowerCase(); 
    return users.find(user => user.id == ref || user.name === ref);
  }

}
export default User