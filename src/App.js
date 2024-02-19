import { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Players from "./Components/Players";
import Gameboard from "./Components/Gameboard";
import Log from "./Components/Log";
import {WINING_COMBINATIONS} from './Components/winningCombination';
import GameOver from "./Components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winner;
const App = () =>{
  const[turns,setTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');
  let gameboard = [...initialGameBoard.map((item)=>[...item])];
  for(let item of turns){
    const{square,player} = item;
    const{row,col} = square;
    
    { gameboard[row][col]=== null &&
    (gameboard[row][col] = player) }
  }

  for(let combinations of WINING_COMBINATIONS){
    let firstContainerSymbol = gameboard[combinations[0].row][combinations[0].col] 
    let secondContainerSymbol =  gameboard[combinations[1].row][combinations[1].col] 
    let thirdContainerSymbol =  gameboard[combinations[2].row][combinations[2].col] 

    if(firstContainerSymbol &&
       firstContainerSymbol === secondContainerSymbol &&
       firstContainerSymbol === thirdContainerSymbol 
      ){
        winner = firstContainerSymbol;
      }
  }

  const hasDraw = turns.length === 9 ?true :false;

  const selectContainer = (rowIndex,colIndex) =>{
    console.log(rowIndex,colIndex)
    setActivePlayer((prevValue)=>
         prevValue === 'X' ? 'O' : 'X'
    )

   
   
  
    setTurns((prevTurns) => {
      let currentPlayer = 'X';
      console.log(prevTurns)
        if(turns.length>0 && prevTurns[0].player === 'X'){
            currentPlayer= 'O';
        }
      let updateTunrs = [   
       { square : {row: rowIndex,col: colIndex},player :currentPlayer },
       ...prevTurns,
      ]
      console.log(updateTunrs[0].square.row,updateTunrs[0].square.col)

      return updateTunrs;
    })
  }

  
 const restartMatch =()=>{
  setTurns([]);
  window.location.reload(false);
 }

  return(
    <>
     <Header/>
     <menu id='game-container'>
       <ol id="players">
          <Players name="Player-1" symbol="X" isactive = {activePlayer === 'X'}/>
          <Players name="Player-2" symbol="0" isactive = {activePlayer === 'O'}/>
       </ol>
       <Gameboard onSelectContainer={selectContainer} board = {gameboard}/>
     </menu>
     {(winner || hasDraw) && <GameOver winner={winner} restart = {restartMatch}/>}
     <Log turn = {turns}/>
    </>
  );
}

export default App;