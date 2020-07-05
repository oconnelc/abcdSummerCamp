import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);

  function reset() {
    setSeconds(10);
    setIsActive(true);
  }

  useEffect(() =>{
    let interval = null;

    if(isActive) {
      interval = setInterval(() => {
        if(seconds == 0) {
          setIsActive(false);
        } else {
          setSeconds(seconds => seconds -1);
        }
        
      },1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  var text = seconds == 0 ? "YOU ARE DEAD" : seconds;
  var className = 'TimerText';

  if(seconds == 0) {
    className = 'dead';

  } else if(seconds < 5) {
    className = 'blinking'
  }

  return (
    

    <div className="App">
      <div className={className}>
        {text}
      </div>
    </div>
  );
}

export default App;
