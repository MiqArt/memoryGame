import React, { useState, useEffect } from 'react';
import Box from './components/Box';
import Modal from './components/Modal';

function App() {
  const [boxArr, setBoxArr] = useState([]);
  const [steps, setSteps] = useState({steps: 0, success: 0});
  const [boxClass, setBoxClass] = useState({});
  const [firstClickedBox, setFirstClickedBox] = useState({name: false, index: false});
  const [clickable, setClickable] = useState(true);
  const [showAlert, setShowAlert] = useState({show: false, status: ""});
  
  const onBoxClick = (name, index) => {
    if(!firstClickedBox.name) {                // FIRST CLICKED BOX
      setFirstClickedBox({name: name, index: index});
      setBoxClass({...boxClass, [index]: "rotate"})    
    }
    else if(name === firstClickedBox.name && index !== firstClickedBox.index) { // SUCCESS!
      setClickable(false);
      setSteps({...steps, steps: steps.steps + 1, success: steps.success +1 })
      setBoxClass({...boxClass, [index]: "rotate"})
      setFirstClickedBox({name: false, index: false})
      setTimeout(() => {
        setBoxClass({...boxClass, [index]: "success", [firstClickedBox.index]: "success"});
        if(steps.success === 7) {
          setShowAlert({show: true, status: "success"})
        }
        else if(steps.steps > 23) {     
          setShowAlert({show: true, status: "danger"})
        }
        setClickable(true)
      }, 600)    
    }
    else if(index !== firstClickedBox.index) {  // MISTAKE!
      setClickable(false);
      setSteps({...steps, steps: steps.steps + 1})
      setBoxClass({...boxClass, [index]: "rotate"});
      setFirstClickedBox({name: false, index: false});
      setTimeout(() => {
        setBoxClass({...boxClass, [index]: "", [firstClickedBox.index]: ""});
        if(steps.steps > 23) {
          setShowAlert({show: true, status: "danger"});
        } 
        setClickable(true)
      }, 600)
    }
  }

  const restartTheGame = () => {
    window.location.reload();
  }

  const sortRandomly = (arr = []) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    color += 77;
    return color;
  }

  useEffect(() => {
    const startArr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    const shuffleArr = sortRandomly(startArr);
    setBoxArr(shuffleArr);
  }, [])

  return (
    <div className="App container d-flex flex-column justify-content-center align-items-center">
      <div className="panel">
        <div>Steps: {steps.steps}</div>
        <p className="font-weight-bold mb-0">Memory Game</p>
        <button onClick={restartTheGame} type="button" className="btn btn-dark">RESTART</button>
      </div>
      <div className="maincontainer d-flex">
        <div className="row w-100 m-0">
        {boxArr.map((name, index) => {
          return <Box
          key={`box-${index}`}
          onClick={clickable && (() => onBoxClick(name, index))} 
          alt={name} 
          boxClass={boxClass[index]}
          color={{c1: getRandomColor(), c2: getRandomColor()}}
          />
        })}
        </div>
      </div>
      {showAlert.show && <Modal status={showAlert.status} result={steps.steps} restartTheGame={restartTheGame}/>}
    </div>
  );
}

export default App;
