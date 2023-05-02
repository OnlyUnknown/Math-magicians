import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator() {
  return (
    <div className="box">
      <Numbers />
    </div>
  );
}



// ButtonName.propTypes = { input: PropTypes.string.isRequired };
// ButtonName.propTypes = { styl: PropTypes.string.isRequired };

const Numbers = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const displayValue = calcData.next || calcData.total || '0';
  const handleClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };
  const ButtonName = (props) => {
    
  
    const { styl, input } = props;
    return (
      <button onClick={() => handleClick(input)} className={styl} type="button">
        {input}
      </button>
    );
    
  };
  function Screen() {
    return <div className="screen">{displayValue}</div>;
  }
  

  return (
  <>  
  <Screen/>
  <div className="flex-N">
    <div className="Numbers">
      <ButtonName input="AC" />
      <ButtonName input="+/-" />
      <ButtonName input="%" />
      <ButtonName input="1" />
      <ButtonName input="2" />
      <ButtonName input="3" />
      <ButtonName input="4" />
      <ButtonName input="5" />
      <ButtonName input="6" />
      <ButtonName input="7" />
      <ButtonName input="8" />
      <ButtonName input="9" />
      <ButtonName input="0" styl="Zewo" />
      <ButtonName input="." />
    </div>
    <div>
    <div className="arghitics">
        <ButtonName input="÷" />
        <ButtonName input="x" />
        <ButtonName input="-" />
        <ButtonName input="+" />
        <ButtonName input="=" />
      </div>
    </div>

  </div>
  </>
)
};



export default Calculator;
