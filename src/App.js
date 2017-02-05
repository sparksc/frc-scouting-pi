// @flow
import React, { Component } from 'react';
import Jumbotron1 from './components/Jumbotron1';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
        <Jumbotron1 />
      </div>
    );
  }
}

export default App;
