import react from 'react';
import ".././index.css";



const GameOver = ({winner,restart}) =>{

    return(
        <div id='game-over'>
            <h1>Game Over</h1>
          {winner &&<p> {winner} is Win the Game!</p> }
          {!winner &&<p> Match gets draw</p> }
            <p><button onClick={restart}>Rematch</button></p>
        </div>
    )
}

export default GameOver;