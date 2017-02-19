// @flow
import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
