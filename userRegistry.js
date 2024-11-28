class UserRegistry {
    constructor() {
      if (UserRegistry.instance) {
        return UserRegistry.instance;
      }
      this.users = [];
      UserRegistry.instance = this;
    }
  
    addUser(name, email) {
      this.users.push({ name, email });
    }
  
    getUsers() {
      return this.users;
    }
  }
  
  const userRegistry = new UserRegistry();
  export default userRegistry;
  