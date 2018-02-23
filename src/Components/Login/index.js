import React, { Component } from 'react';
import auth0 from 'auth0-js';
//
// import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { Auth0Lock } from 'auth0-lock';
import { Auth0LockPasswordless } from 'auth0-lock';
import './login.css';
import { Button, Jumbotron } from 'react-bootstrap';
import renderIf from 'render-if'



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
     accessToken: null,
     picture: null,
     name: null
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
         this.setState({picture: this.userProfile.picture});
         this.setState({name: this.userProfile.nickname})
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
     <container className="loginLayout">
         <Jumbotron className="jumboStyle">
         <br/>
         
       
         {renderIf(this.state.picture !== null)(
           <div>
             <img src = {this.state.picture} />
           </div>
           )}

         {renderIf(this.state.picture == null)(
           <div>
             <button className="buttonStyle" onClick={()=>{this.login()}}>Login Dawg</button>
           </div>
           )}
       

         <div className="helloStuff">
         <h1>Hello {this.state.name}</h1>
       
         </div>
         </Jumbotron>;
     </container>
   );
 }
}

export default Login;