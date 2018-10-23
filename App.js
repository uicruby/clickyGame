// eslint-disable-next-line
import React, {component} from "react";
import Square from "./components/square";
import "./App.css";
import Princess from "./princess.json"

// import "./components/square.css";

const shuffleArray = (array) => {
  let counter = array.length;
  // while there are elements in the array
  while (counter > 0){
    // pick a random index
    let index = Math.floor(Math.random() * counter);
    // decrease counter by one
    counter--;
    // and swap the last element with it
    let temp = array[counter];
    array[counter]=array[index];
    array[index] = temp;
  }
  return array;
}
class Component{
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
  whatever(){console.log("Hello");}
}
class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    gameOver: false,
    Princess
  };

  // when page loads and components mounts,
  // display starting message
componentDidMount(){
  this.setState({result: "Click a princess to get started"})
}

// when a princess gets clicked
// increase points and add id of element to array
clickedPrincess = (id) => {
  console.log(`princess clicked with id: $(id)`);
  if(!this.state.clicked.includes(id)){
    this.pointIncrease();
    this.state.clicked.push(id);
    this.setState({
      gameOver: false
    });
  }
  else{
    this.resetGame();
  }
}

// when the user makes a new click, increment the point by one
// and check if user wins
pointIncrease = () => {
  let score = this.state.currentScore + 1;
  console.log(` score is $(score)`);
  if(score === this.state.Princess.length){
  this.setState({
  result: "you win! Start clicking to play again",
  topScore: score,
  currentScore: 0, 
  clicked: [],
  Princess,
  gameOver: false
  });
  }else if(score > this.state.topScore){
    this.setState({
      topScore: score,
      currentScore: score,
      result: "Correct! New high score!",
  });
  }
 else
  {
  this.setState({
    currentScore: score,
    result: "Correct!"
  });
  this.resetPrincessArray();
  }
}
// reset the game when user chooses a duplicate
resetGame = () => {
  this.setState({
    points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "You Loss!",
      clicked: [],
      Princess,
      gameOver: true
  });
  console.log('Game Over? ', this.state.gameOver);
  this.resetPrincessArray();
}

// set the array to be mapped to a new scrambled version using shuffle algorithm
resetPrincessArray = () => {
  let newScramble = shuffleArray(Princess);
    this.setState({Princess: newScramble});
}
render() {
  return (
    <div className='container'>

      <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
      
      <div className='mainStyle'>
      {this.state.Princess.map(princess => (
      <Square
        id={princess.id}
        image={princess.image}
        clickedPrincess={this.clickedPrincess}
      />
      ))}
      </div>
    </div>
  );
}
}

export default App;
// render() {
//   return(
//     <div className='container'>
//         <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>

//         <div className='mainStyle'>
//         {this.state.Princess.map(princess => (
//         <Square
//           id={princess.id}
//           image={princess.image}
//           clickedPrincess={this.clickedPrincess}
//         />
//         ))}
//         </div>
//       </div>
//     );
//   }
// }

//   _nextRound = () => {
//     return princess.reverse();
//   }

//   _playGame = () => {

//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Clicky Game <i className="fas fa-chess-queen"></i></h1>
//         </header>
//         {/* {this.state.princess.map(princess => (<Square key = {princess.id} name = {princess.name} image = {princess.image}/>))} */}
//       <div className = "Container">
//         <Square name = {this.state.princess[0].name} image = {this.state.princess[0].image}/>
//         <Square name = {this.state.princess[1].name} image = {this.state.princess[1].image}/>
//         <Square name = {this.state.princess[2].name} image = {this.state.princess[2].image}/>
//         <Square name = {this.state.princess[3].name} image = {this.state.princess[3].image}/>
//         <p className = 'clearfix'></p>
//         <Square name = {this.state.princess[4].name} image = {this.state.princess[4].image}/>
//         <Square name = {this.state.princess[5].name} image = {this.state.princess[5].image}/>
//         <Square name = {this.state.princess[6].name} image = {this.state.princess[6].image}/>
//         <Square name = {this.state.princess[7].name} image = {this.state.princess[7].image}/>
//         <p className = 'clearfix'></p>
//         <Square name = {this.state.princess[8].name} image = {this.state.princess[8].image}/>
//         <Square name = {this.state.princess[9].name} image = {this.state.princess[9].image}/>
//         <Square name = {this.state.princess[10].name} image = {this.state.princess[10].image}/>
//         <Square name = {this.state.princess[11].name} image = {this.state.princess[11].image}/>
//         <p className = 'clearfix'></p>
//       </div>
//       </div>
//     );
//   }
// }

// export default App;
