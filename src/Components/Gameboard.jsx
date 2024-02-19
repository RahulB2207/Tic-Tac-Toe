import ".././index.css";
import { useState } from "react";




const Gameboard = ({onSelectContainer,board}) => {
  // let gameboard = initialGameBoard;
  // for(let item of turn){
  //   const{square,player} = item;
  //   const{row,col} = square;
    
  //   { gameboard[row][col]=== null &&
  //   (gameboard[row][col] = player) }
  // }
  return (
    <ol id="game-board">
      {board?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectContainer(rowIndex,colIndex) } disabled={col!==null}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
