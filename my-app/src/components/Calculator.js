import React from "react";

function Calculator() {
    return (
        <div>
        <Screen />
 
        <Numbers />
        <Arthitics />
        </div>
    )
}

function Screen() {
    return <div>0</div>
}

const Numbers = () => {
    return(
        <div>
                   <Toparth />
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <div>
        <button>0</button>
        <button>.</button>
    </div>
    </div>
    )
}

const Arthitics = () => {
    return(
        <div>
            <button>/</button>
            <button>X</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
        </div>
    )
}

const Toparth = () => {
    return (<div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
    </div>
    )
}

export default Calculator

