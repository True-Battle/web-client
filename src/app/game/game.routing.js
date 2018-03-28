/* @ngInject */
function routing($stateProvider) {

  $stateProvider
    .state('shell.game', {
      url: "/",
      template: "<game class='game'></game>"
    })
}

export default routing