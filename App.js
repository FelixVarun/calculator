import './App.css';
import { useState} from 'react';

function App() {
  const[Total,setTotal]=useState('');

  const handleClick= (e) =>{
    setTotal(Total.concat(e.target.name));
  }

  const clear= () =>{
     setTotal("");
  }

  const handleDelete= () =>{
setTotal(Total.slice(0,-1));
  }
  
  const calculate= ()=>{
    try{
    setTotal(eval(Total).toString());
    }catch{
      setTotal("Error");
    }
}
  return (
    <div className="App">
    <h1>FELIX'S CALCULATOR</h1>      
   
    <div className="container">
      <form>
        <input type='text' value={Total}/>
      </form>
      <div className='keypad'>
        <button onClick={clear}id="clear">AC</button>
        <button onClick={handleDelete}id="del">DEL</button>
        <button name='/'id="del">&divide;</button>
        <button name='7'onClick={handleClick}>7</button>
        <button name='8'onClick={handleClick}>8</button>
        <button name='9'onClick={handleClick}>9</button>
        <button name='*'onClick={handleClick}>&times;</button>
        <button name='4'onClick={handleClick}>4</button>
        <button name='5'onClick={handleClick}>5</button>
        <button name='6'onClick={handleClick}>6</button>
        <button name='-'onClick={handleClick}>-</button>
        <button name='1'onClick={handleClick}>1</button>
        <button name='2'onClick={handleClick}>2</button>
        <button name='3'onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='0'onClick={handleClick}>0</button>
        <button name='.'onClick={handleClick}>.</button>
        <button onClick={calculate}id="equal">=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
