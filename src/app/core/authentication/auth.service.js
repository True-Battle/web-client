import { BaseService } from '../';

export class AuthService extends BaseService {

  /* @ngInject */
  constructor($http, $env, profileService, $storage) {
    super($http, $env);
    this.profileService = profileService;
    this.$storage = $storage;
  }

  isAuth() {
    return this.getToken() ? true : false;
  }

  register(form) {

  }

  login(user) {
    this.setEntity('auth');
    const loginPromise = this.post(user);

    const authHandler = (res) => {
      if (!res.data.auth) {
        return null;
      } else {
        this.setToken(res.data.token);
        this.profileService.setUser(res.data.user);
        return res.data.user;
      }
    };

    return loginPromise.then(authHandler);
  }

  logout() {
    this.setEntity('logout');
    //this.post();
    this.cleanToken();
    this.profileService.delUser();
  }

  setToken(token) {
    this.$storage.set('auth_token', token);
  }

  getToken() {
    return this.$storage.get('auth_token');

  }

  cleanToken() {
    this.setToken('')
  }
}