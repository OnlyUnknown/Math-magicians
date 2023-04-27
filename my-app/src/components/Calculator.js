import React from "react";

function Calculator() {
    return (
        <div className="box">
        <Screen />
        <Numbers />
        </div>
    )
}

function Screen() {
    return <div className="screen">0</div>
}

const Numbers = () => {
    return(
        <div className="flex-N">
        <div className="Numbers">
         <button>AC</button>
        <button>+/-</button>
        <button>%</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className="Zewo">0</button>
        <button>.</button>
        </div>
    <div>
        <Arthitics/>
    </div>
    
    </div>
    )
}

const Arthitics = () => {
    return(
        <div className="arghitics">
            <button>/</button>
            <button>X</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
        </div>
    )
}



export default Calculator

