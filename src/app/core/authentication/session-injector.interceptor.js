export class SessionInjector {

  /* @ngInject */
  constructor($storage) {
    this.$storage = $storage;
    getToken = getToken.bind(this);
  }

  request(config) {
    const token = getToken();
    if (token) {
      config.headers['x-session-token'] = token;
    }
    return config;
  }
}

function getToken() {
  return this.$storage.get('auth_token');
}