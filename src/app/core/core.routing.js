/* @ngInject */
export function routing($httpProvider, $stateProvider) {

  $httpProvider.interceptors.push('sessionInjector');

  $stateProvider
    .state('shell', {
      url: "",
      template: "<shell></shell>"
    })
}