import React, { Component } from 'react';

import auth0 from 'auth0-js';


class Callback extends Component {
  constructor(props){
    super(props)
    this.handleAuthentication()
  }

  auth0 = new auth0.WebAuth({
      domain: 'brackathon.auth0.com',
      clientID: 'FL5V6YHdehEK6jGwX6dducPN28K0AtSh',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://brackathon.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('value of authResult: ' + authResult + authResult.accessToken + authResult.idToken);
        localStorage.setItem('access_token', authResult.accessToken)
        // this.setSession(authResult);
        // history.replace('/home');
      } else if (err) {
        // history.replace('/home');
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <p>
            Inside Callback
        </p>

      </div>
    );
  }
}

export default Callback;
