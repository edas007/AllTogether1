import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    nuevoId:1,
    nuevoFirstName:'',
    nuevoLastName:'',
    nuevoUserName:'',
    errorEnFormulario:'',
    
    items:[{
      id: 0,
      firstName: 'ed',
      lastName: 'as',
      userName: 'eas',
      numGames: 0,
           }],
  };

  handleChangeFName = event => {
    this.setState({ nuevoFirstName: event.target.value });
  };

  handleChangeLName = event => {
    this.setState({ nuevoLastName: event.target.value });
  };

  handleChangeUName = event => {
    this.setState({ nuevoUserName: event.target.value, errorEnFormulario:'' });
  };

  addItem = event => {
    event.preventDefault();
    this.isUniqueUserName(this.state.nuevoUserName) === true ? 
    this.setState(oldState => ({
      items: [...oldState.items, {id:this.state.nuevoId, firstName:this.state.nuevoFirstName, lastName:this.state.nuevoLastName, userName:this.state.nuevoUserName, numGames:0}],
      nuevoId: oldState.nuevoId + 1,
    }))
     : 
    this.setState({
    	errorEnFormulario: 'error duplicado'
    })
  };

isUniqueUserName(nuevoUserName){
  //Use this format when calling from other private methods
  const items = this.state.items.filter(x => x.userName === nuevoUserName)
  return items.length === 0;
}

  inputIsEmpty = () => {
    return (
      this.state.nuevoFirstName === ''
      || this.state.nuevoLastName === ''
      || this.state.nuevoUserName === ''
           );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practicee</h1>
        </header>
    
        <h2>Add User</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter First Name"
            value={this.state.nuevoFirstName}
            onChange={this.handleChangeFName}
          />
			<p/>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={this.state.nuevoLastName}
            onChange={this.handleChangeLName}
          />
			<p/>
          <input
            type="text"
            placeholder="Enter UserName"
            value={this.state.nuevoUserName}
            onChange={this.handleChangeUName}
          />
			<label>{this.state.errorEnFormulario}</label>
			<p/>
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

          <button>List Users</button>
			<ListaUsuarios pasameLaLista={this.state.items}/>
      </div>
    );
  }
}

export default App;
