import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    hanldeSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;