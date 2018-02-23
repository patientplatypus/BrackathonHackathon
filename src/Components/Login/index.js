import React, { Component } from 'react';
import auth0 from 'auth0-js';
//
// import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { Auth0Lock } from 'auth0-lock';
import { Auth0LockPasswordless } from 'auth0-lock';



class Login extends Component {
  constructor(props){
    super(props)
    // this.state={
    //   lock: new Auth0Lock("FL5V6YHdehEK6jGwX6dducPN28K0AtSh", "brackathon.auth0.com"),
    // }
    // this.state.lock.on("authenticated", function(authResult) {
    //   console.log('inside this.state.lock.on');
    //   console.log('value of authResult: ', authResult);
    //   this.state.lock.getUserInfo(authResult.accessToken, function(error, profile) {
    //     if (error) {
    //       // Handle error
    //       console.log("error in lock: ", error)
    //       return;
    //     }
    //
    //     localStorage.setItem("accessToken", authResult.accessToken);
    //     localStorage.setItem("profile", JSON.stringify(profile));
    //
    //     // Update DOM
    //   });
    // });
    this.state={
      accessToken: null
    }
  }

  componentDidMount(){
    this.getProfile()
  }

  getAccessToken() {
      console.log('value of access_token: '+localStorage.getItem('access_token'));
      if (localStorage.getItem('access_token')===null) {
        console.log('No Access Token found');
      }
      this.setState({
        accessToken: localStorage.getItem('access_token')
      })
    }

  getProfile() {
    // console.log('inside getProfile');
    // this.getAccessToken();

    if (localStorage.getItem('access_token')!=null){
      this.auth0.client.userInfo(localStorage.getItem('access_token'), (err, profile) => {
        console.log('profile: ', profile);
        if (profile) {
          this.userProfile = profile;
          console.log('value of this.userProfile: ', this.userProfile);
        }else{
          console.log("profile err: ", err)
        }
      });
    }
  }

  auth0 = new auth0.WebAuth({
      domain: 'brackathon.auth0.com',
      clientID: 'FL5V6YHdehEK6jGwX6dducPN28K0AtSh',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://brackathon.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

  login() {
    this.auth0.authorize();
  }

  render() {

    return (
      <div>
        <p>
            Hello login
        </p>
        <br/>
        <button onClick={()=>{this.login()}}>Login Dawg</button>
        <button onClick={()=>{this.authorizeAuth0()}}>authorizeAuth0</button>
        <button onClick={()=>{this.handleAuthentication()}}>handleAuthentication</button>
        <button onClick={()=>{this.setSession()}}>setSession</button>
        <button onClick={()=>{this.isAuthenticated()}}>Login Dawg</button>
        <button onClick={()=>{this.showStorage()}}>showStorage</button>
        <button onClick={()=>{this.authorizeAuth0()}}>authorizeAuth0</button>
        <button onClick={()=>{this.getProfile()}}>getProfile</button>
        <button onClick={()=>{this.lockFunction()}}>lockFunction</button>
        <button onClick={()=>{this.tryAPost()}}>tryAPost</button>
      </div>
    );
  }
}

export default Login;
