import routing from './login.routing'

// Components
import loginComponent from './login.component';
import loginForm from './login-form/login-form.component';

// Define Module
const login = angular.module('login', []);

login.component('login', loginComponent);
login.component('loginForm', loginForm);

login.config(routing);

export default login;