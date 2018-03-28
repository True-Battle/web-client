import { SessionInjector, AuthService, DbService, ProfileService, Dispatcher } from './'
import { BrowserService, ReportService, SocketService, stateMachineFactory, routing } from './'

import shell from './shell/shell.component'
import topBar from './shell/top-bar/top-bar.component'
import UiMenuBar from './shell/top-bar/ui-menu-bar/ui-menu-bar.component'
import menu from './shell/menu/menu.component'

// Define module
const core = angular.module('core', []);

core.service('authService', AuthService);
core.service('sessionInjector', SessionInjector);
core.service('$storage', DbService);
core.service('browserService', BrowserService);
core.service('profileService', ProfileService);
core.service('$dispatcher', Dispatcher);
core.service('reportService', ReportService);
core.service('socketService', SocketService);
core.factory('stateMachineService', stateMachineFactory);

core.component('shell', shell);
core.component('topBar', topBar);
core.component('uiMenuBar', UiMenuBar);
core.component('menu', menu);

// Define module routing
core.config(routing);

core.run(($rootScope, $state, authService) => {

  $rootScope.$on('$stateChangeStart',
    (event, toState) => {
      if (!authService.isAuth()) {
        if (toState.name === "login") return;

        event.preventDefault();
        $state.go('login');
      }
    })

});

export default core;