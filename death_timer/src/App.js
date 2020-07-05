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


  return (
    <div className="App">
      <div className="TimerText">
        {seconds}
      </div>
    </div>
  );
}

export default App;
