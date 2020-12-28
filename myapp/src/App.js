import Ninjas from './Ninjas';
import React, { Component } from 'react';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Tabish', age: 26, belt: 'black', id: 1 },
      { name: 'Irtaza', age: 1, belt: 'blue', id: 2 },
      { name: 'Jiya', age: 22, belt: 'red', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
