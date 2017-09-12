import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.serverUrl = 'http://localhost:3001/api/v1/users/';
  }



  login() {
    this.auth0.authorize();
    console.log('login function')
  }

  handleAuthentication() {
    console.log('this is the handleAuthentication function');
    // this.auth0.parseHash((err, authResult) => {
    //   console.log(authResult, 'authResult');
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //     history.replace('/dashboard');
    //   } else if (err) {
    //     history.replace('/');
    //     console.log(err);
    //     alert(`Error: ${err.error}. Check the console for further details.`);
    //   }
    // });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    console.log(authResult, 'authresult  at setSession()');
    let expiresAt = JSON.stringify((authResult.expiresIn * 14400) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    console.log('set session log');
    fetch(this.serverUrl + authResult.accessToken)
        .then(console.log('token sent'));

    // navigate to the home route
    // history.replace('/dashboard');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log(expiresAt, 'expires at isAuthenticated');
    return new Date().getTime() < expiresAt;
  }
}
