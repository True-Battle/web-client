import '../styles/global.styl'

import envJSON from '../environments/env.json'

import appComponent from './app.component'
import { envProvider } from './env.provider'

import core from './core/core.module'
import shared from './shared/shared.module'
import game from './game/game.module'
import login from './login/login.module'

export const app = angular.module('app',
  [
    'ui.router',
    'ngCookies',
    'core',
    'shared',
    'game',
    'login'
  ]
);

app.component('appRoot', appComponent);
app.provider('$env', envProvider);

/* @ngInject */
app.config(function($envProvider) {

  $envProvider.set(envJSON)

});

app.run((reportService) => {});