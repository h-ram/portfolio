import "./style.scss"

function AnimatedLetters({letterClass,text,idx}){
    const textArr = text.split('');
    const letters = textArr.map((char,index)=> (
        <span 
            className={`${letterClass} _${index + idx}`}>
            {char}
        </span>
    ))
    return (
        <>
            {letters}
        </>
    )
}
export default AnimatedLetters;