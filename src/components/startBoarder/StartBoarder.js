import './startBoarder.scss'

const StartBoarder = (props) => {

    return(
        <div className='start'>
            <div className="start__item">
                <label htmlFor="first">First player:</label>
                <input type='text' name='first' className='start__item-input' 
                        onChange={(e)=> props.setPlayersNames((playersNames)=> ({...playersNames,first: e.target.value}))}></input>
            </div>
            <div className="start__item">
                <label htmlFor="second">Second player:</label>
                <input type='phone' name='second' className='start__item-input' 
                    onChange={(e)=> props.setPlayersNames((playersNames)=> ({...playersNames,second: e.target.value}))}></input>
            </div>
            <button className='start__btn start__btn_first' onClick={()=> props.setStartGame(false)}>DONE</button>
        </div>
    )
}

export default StartBoarder;