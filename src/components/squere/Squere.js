import './squere.scss'

const Squere = ({value,onClick, winSq}) => {


    return (
        <>
            <div className={`squere ${winSq}`} onClick={onClick}>{value}</div>
        </>
    )
}

export default Squere;