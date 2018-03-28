export class BrowserService {

  /* @ngInject */
  constructor() {
    this.modernizr = Modernizr;
  }

  isCookies() {
    return this.modernizr.cookies;
  }

  isLocalstorage() {
    return this.modernizr.localstorage;
  }

  isSessionstorage() {
    return this.modernizr.sessionstorage;
  }
}