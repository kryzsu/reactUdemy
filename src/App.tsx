import React, {ChangeEvent} from 'react';
import './App.css';
import {UserInput} from "./UserInput/UserInput";
import {UserOutput} from "./UserOutput/UserOutput";

interface AppState {
  username: string
}

export class App extends React.Component<{}, AppState> {

  state: AppState = {username: 'demo'};

  setUsernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({username: event.target.value})
  };

  render() {
    return (
        <div className="App">
          <UserInput  initValue={this.state.username} userNameChanged={this.setUsernameHandler}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
        </div>
    );
  }
}
