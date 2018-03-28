const ENV = process.env.NODE_ENV;

export function envProvider() {

  let variables = {};

  function getErrorMessage(key) {
    return `Variable "${key}" is not defined in ${ENV}.json`;
  }

  return {

    set(environments) {
      variables = environments[ENV];
    },

    $get: function() {

      return {

        get(key) {
          if (!variables[key]) {
            throw new Error(getErrorMessage(key))
          }
          return variables[key]
        },

        getApiUrl() {
          if (!variables['api_url']) {
            throw new Error(getErrorMessage('api_url'))
          }
          return variables['api_url'];
        },

        getApiKey() {
          if (!variables['api_key']) {
            throw new Error(getErrorMessage('api_key'))
          }
          return variables['api_key'];
        },

        getGameUrl() {
          if (!variables['game_url']) {
            throw new Error(getErrorMessage('game_url'))
          }
          return variables['game_url'];
        }

      }
    }

  }
}