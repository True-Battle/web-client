export class BaseService {

  /* @ngInject */
  constructor($http, $env, entity) {
    this.$http = $http;
    this.$env = $env;
    this.entity = entity || '';
  }

  setEntity(entity) {
    this.entity = entity;
  }

  get(params, config) {
    return this.$http.get(this.$env.getApiUrl() + '/' + this.entity, {params: params}, config)
  }

  getById(id, params, config) {
    return this.$http.get(this.$env.getApiUrl() + '/' + this.entity + '/' + id, {params: params}, config)
  }

  post(data, config) {
    return this.$http.post(this.$env.getApiUrl() + '/' + this.entity, data, config)
  }

  update(id, data, config) {
    return this.$http.put(this.$env.getApiUrl() + '/' + this.entity + '/' + id, data, config)
  }

  remove(id, config) {
    return this.$http.delete(this.$env.getApiUrl() + '/' + this.entity + '/' + id, config)
  }

}