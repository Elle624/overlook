class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  returnUser(referance, users) {
    referance.toLowerCase(); 
    return users.find(user => user.id == referance || user.name === referance);
  }

}
export default User