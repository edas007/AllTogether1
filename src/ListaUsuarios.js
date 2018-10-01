import React from 'react';

class ListaUsuarios extends React.Component{
  constructor(){
    super();
    this.state={
      showGames: true,
    }
  }
  
  flipGameScores = () =>{
    //Use this format when calling from UI
  		this.setState((prevState) => ({
          showGames: !prevState.showGames,
        }))
	} 

  render(){
    const miListita = this.props.pasameLaLista;
    console.log(miListita);
    return(
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
      {miListita && miListita.map((item) => 
        <li key={item.id}>
          {(item.firstName)} -- {this.state.showGames === true ? (item.numGames) : '*'}
        </li>)
      }
        </ol>
		<p/>
          <button onClick={this.flipGameScores}>Flip Game Scores</button>

    </div>
    )
  }
}

export default ListaUsuarios;