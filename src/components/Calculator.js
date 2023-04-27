import React from 'react';

function Calculator() {
  return (
    <div className="box">
      <Screen />
      <Numbers />
    </div>
  );
}

function Screen() {
  return <div className="screen">0</div>;
}

const Numbers = () => (
  <div className="flex-N">
    <div className="Numbers">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="Zewo">0</button>
      <button type="button">.</button>
    </div>
    <div>
      <Arthitics />
    </div>

  </div>
);

const Arthitics = () => (
  <div className="arghitics">
    <button type="button">÷</button>
    <button type="button">X</button>
    <button type="button">-</button>
    <button type="button">+</button>
    <button type="button">=</button>
  </div>
);

export default Calculator;
