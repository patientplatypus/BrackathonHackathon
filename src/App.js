import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
/* import './App.css'; */
import Login from './Components/Login';
import OfficialBracket from './Components/OfficialBracket';
import RankingBracket from './Components/RankingBracket';
import UserBracket from './Components/UserBracket';
import Callback from './Components/Callback';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <div>
            <div style={{display: "inline-block", height: "5vh", width: "100vw", backgroundColor: "rgb(200,170,240)"}}>
              <Link to="/" style={{backgroundColor: "rgb(200, 180, 135)"}}>LOGIN</Link> &nbsp;
              <Link to="/userbracket" style={{backgroundColor: "rgb(200, 180, 135)"}}>USER BRACKET</Link> &nbsp;
              <Link to="/rankingbracket" style={{backgroundColor: "rgb(200, 180, 135)"}}>RANKING BRACKETS</Link> &nbsp;
              <Link to="/officialbracket" style={{backgroundColor: "rgb(200, 180, 135)"}}>OFFICIAL BRACKET</Link> &nbsp;
            </div>
             <Route exact path='/' component={Login} />
             <Route path='/rankingbracket' component={RankingBracket} />
             <Route path='/userbracket' component={UserBracket} />
             <Route path='/officialbracket' component={OfficialBracket} />
             <Route path='/callback' component={Callback}/>
          </div>
       </Router>
      </div>
    );
  }
}

export default App;