// Components
import sound from './sound/sound.component';

// Define Module
const sharedModule = angular.module('shared', []);

sharedModule.component('sound', sound);

export default sharedModule;