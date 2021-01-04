import Ninjas from './Ninjas';
import React, { Component } from 'react';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Tabish', age: 26, belt: 'black', id: 1 },
      { name: 'Irtaza', age: 1, belt: 'blue', id: 2 },
      { name: 'Jiya', age: 22, belt: 'red', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) =>{
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    })
    this.setState({
      ninjas:ninjas
    })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps,prevState){
    console.log('component updated');
    console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App" >
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
