import ".././index.css";
import { useState } from "react";

const Players = (props) =>{
    const[isEditing,setEditing] = useState(false);
    const[player,setPlayer] = useState(props.name);

    const handleClick = () =>{
         setEditing((editing) =>!editing);
    }

    const getValue = (e) =>{
       setPlayer(e.target.value);

    } 

   let playerName =   <span className="player-name">{player}</span>
   let buttonName = 'Edit';
    if(isEditing){
      playerName = <input type='text'  className="player-name" value={player} onChange={getValue} required/>
     buttonName = "Save"
    }
    return(
        <>
        
         <li className={props.isactive ? 'active ' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{props.symbol}</span>
                <button onClick={handleClick}>{buttonName}</button>
            </span>
         </li>
       
        </>
    );
}

export default Players;