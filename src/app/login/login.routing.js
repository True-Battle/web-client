/* @ngInject */
function routing($stateProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      template: "<login></login>"
    });
}

export default routing