import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Board from "../board/Board"
import { calculateWinner } from "../../helper/calculateWiner";
import './game.scss'
import StartBoarder from "../startBoarder/StartBoarder";

const Game =() => {

    const [board, setBoard] = useState(new Array(9).fill(""));
    const [playerX, setPlayerX] = useState(true);
    const [counterFirstPlayer, setCounterFirstPlayer] = useState(0);
    const [counterSecondPlayer, setCounterSecondPlayer] = useState(0);
    const [playersNames, setPlayersNames] = useState({
        first:"",
        second:""
    });
    const [startGame, setStartGame]  = useState(true)
    const winner = calculateWinner(board);


    useEffect(()=> {
        winnerCounter()
    }, [board])


    const handleClick  = (index) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return null

        boardCopy[index] = playerX ? "X" : "O";

        setBoard(boardCopy);
        setPlayerX(!playerX);
    }

    const winnerCounter = () => {
        if (winner) {
            !playerX ? setCounterFirstPlayer(() => counterFirstPlayer + 1 ) :
                       setCounterSecondPlayer(() => counterSecondPlayer + 1);
        }
    }

    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={()=>{
                setBoard(new Array(9).fill(""));
                setPlayerX(!playerX)
            }}>RESTART</button>
        )
    }

    const gameInfo = () => {
        return (
            <p className="game__winner">
                {
                winner ? `Winner ${!playerX ? 
                    `${playersNames.first}` :
                    `${playersNames.second}`}` : 
                        `Next player: ${playerX ? 
                            `${playersNames.first} (X)` :
                            `${playersNames.second} (O)`}`
                }
            </p>
        )
    }

    const nodeRef = useRef()

    return (
        <div className="game">   
            {startGame ? 
                <StartBoarder setStartGame = {setStartGame} setPlayersNames = {setPlayersNames}/> : 
            <>
                <Board arrWinner={winner} board = {board} handleClick={handleClick}/>
                {gameInfo()}
                {startNewGame()}
                <p className = 'game__score'>{`Первый игрок (${playersNames.first}): ${counterFirstPlayer}`}</p>
                <p className = 'game__score'>{`Второй игрок (${playersNames.second}): ${counterSecondPlayer}`}</p>
            </>
            }
        </div>
    )
}

export default Game;