import React from 'react';
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper/wrapper.js";
import Header from "./components/Header/header.js";
import BirdCard from "./components/BirdCard/bird.js";
import Row from "./components/Row.js";
import Scores from "./components/Scores/scores.js";


import birds from "./birds.json";

import './App.css';


class App extends React.Component{
  state = {
    birds,
    topScore : 12,
    score : 0,
    message : ""
  }

  handleClick = id => {
   
    
    const birdsList = this.state.birds;

    // const index = birdsList.map(bird => bird.id ===id?{bird.clicked = true} : {bird.clicked = false} );

    const index = birdsList.findIndex(bird => bird.id ===id );

    let itemClicked = birdsList[index].clicked;
  
    let newScore = this.state.score;

    let newMessage = "";

    if(itemClicked){
     
      newScore = 0;
      newMessage = "You Guessed Incorrect";
    }
    else{
     
      newScore ++ ;
      birdsList[index].clicked = true;
      newMessage = newScore === this.state.topScore ? "You Won" : "You Guessed Correct";
      // newMessage = "You Guessed Correct";
    }
      
    
    this.setState({birds:birdsList});
    this.setState({score:newScore});
    this.setState({message:newMessage});


    const shuffledArray = this.shuffle(this.state.birds);
    this.setState({birds:shuffledArray});


  }

  shuffle = (array)=> {
   
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  render(){
    // const message = this.state.score === 0 ? "You Guessed Incorrect" : "You Guessed Correct"
    return (
      <div className="App">
        <Wrapper>
          <Header></Header>
          
          <Scores
           score= {this.state.score}
           message = {this.state.message}
           topScore = {this.state.topScore}>
          </Scores>     
          
          
          <Row>
         
            {this.state.birds.map(bird => (          
                <BirdCard
                  handleClick = {this.handleClick}
                  id = {bird.id}
                  key = {bird.key}
                  name = {bird.name}
                  image = {bird.image}
                 />                
              ))}
            
          </Row>    
         
        </Wrapper>
        
      </div>
    );
  }
}




export default App;
