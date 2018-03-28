export class ProfileService {

  /* @ngInject */
  constructor($storage) {
    this.$storage = $storage;
    this.user = this.getUser();
  }

  setUser(user) {
    this.$storage.set('user', user);
    if (!this.user) {
      this.user = user
    }
  }

  getUser() {
    if (this.user) {
      return this.user;
    }
    return this.$storage.get('user')
  }

  delUser() {
    this.setUser('');
    this.user = null;
  }

}