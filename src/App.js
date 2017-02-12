// @flow
import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
