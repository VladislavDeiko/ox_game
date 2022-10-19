import Squere from "../squere/Squere"
import './board.scss';

const Board = ({board,handleClick,arrWinner}) => {

    const arr = arrWinner ? arrWinner : []

    const squeres = board.map((item,i)=> {
            let active = "";
            if (arr[0]===i || arr[1]===i || arr[2]===i) {
                active = "active" 
            }
            return (
                <Squere key={i} 
                        value={item} 
                        winSq={active}
                        onClick={()=>handleClick(i)}/>
            )
    })

    return (
        
       <div className="board">
            {squeres}
       </div>
    )
}

export default Board;