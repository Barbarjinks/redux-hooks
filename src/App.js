import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './App.css';

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.num}</h1>
      <button 
        onClick={() => 
          dispatch({
            type: "INCREMENT",
            step: 1
          })
        }
        >
          Increment
        </button>
    </div>
    
  );
}

export default App;
