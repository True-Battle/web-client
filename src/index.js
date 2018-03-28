import { app } from './app/app.module'

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider) {
  $urlRouterProvider.otherwise("/");
  //$locationProvider.html5Mode(true);
  $logProvider.debugEnabled(process.env.NODE_ENV !== 'production');
});