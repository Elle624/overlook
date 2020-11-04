class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  returnNameById(id, users) {
    const targetUser = users.find(user => user.id === id);
    return  targetUser ? targetUser.name : targetUser
  }

}
export default User