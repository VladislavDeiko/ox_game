import { useState } from "react";
import Board from "../board/Board"
import { calculateWinner } from "../../helper/calculateWiner";
import './game.scss'

const Game =() => {

    const [board, setBoard] = useState(new Array(9).fill(""));
    const [playerX, setPlayerX] = useState(true);
    const winner = calculateWinner(board)

    const handleClick  = (index) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return null
        
        boardCopy[index] = playerX ? "X" : "O";

        setBoard(boardCopy);
        setPlayerX(!playerX);
    }

    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={()=>{
                setBoard(new Array(9).fill(""));
                setPlayerX(true)

            }}>RESTART</button>
        )
    }

    return (
        <div className="game">
            <Board arrWinner={winner} board = {board} handleClick={handleClick}/>
            <p className="game__winner">
                {winner ? `Winner ${!playerX?"X":"O"}` : `Next player: ${playerX?"X":"O"}`}
            </p>
            {startNewGame()}
        </div>
    )
}

export default Game;