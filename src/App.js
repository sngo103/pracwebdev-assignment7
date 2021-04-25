import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    return (
        <Router>
          <Switch>
            <Route exact path="/pracwebdev-assignment7/userProfile" render={UserProfileComponent}/>
            <Route exact path="/pracwebdev-assignment7/login" render={LogInComponent}/>
            <Route exact path="/pracwebdev-assignment7/" render={HomeComponent}/>
          </Switch>
        </Router>
    );
  }

}

export default App;