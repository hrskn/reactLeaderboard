import React, { Component } from 'react';
import Users from './Users';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Header/>
      <Users/>
      
      </div>
    );
  }
}

export default App;
