/* @ngInject */
export function stateMachineFactory($rootScope, $timeout) {
  /**
   * Service implementation Finite state machine (https://github.com/jakesgordon/javascript-state-machine)
   * */
  return {
    init(config) {
      const stateMachine = new window.StateMachine(config);
      for (var name in stateMachine) {
        if (name[0] + name[1] === 'on') {
          const nativeMethod = stateMachine[name];

          stateMachine[name] = (params, arg1, arg2) => {
            $timeout(() => {
              $rootScope.$apply(() => {
                nativeMethod.call(null, params, arg1, arg2)
              })
            });
          }
        }
      }

      return stateMachine;
    }
  }
}