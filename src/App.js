
import { useState } from 'react';
import './App.css';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperatures = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature > 15) {
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);

  };
  const decreaseTemperatures = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);

  };
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperatures()}>+</button>
        <button onClick={() => decreaseTemperatures()}>-</button>
      </div>

    </div>
  )
}

export default App;
