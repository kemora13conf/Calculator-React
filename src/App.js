import React, {useState} from 'react'
import './App.css';

function App() {
  let [result, setResult] = useState("")
  
  window.onkeyup = e => {
    console.log(e)
    switch (e.key) {
      case '=':
        let res = String(eval(result))
        res = res.includes(".") ? res.slice(0, res.indexOf(".") + 7) : res
        setResult(res)
        break;
      case '1':
        setResult(prev => prev + e.key)
        break
      case '2':
        setResult(prev => prev + e.key)
        break
      case '3':
        setResult(prev => prev + e.key)
        break
      case '4':
        setResult(prev => prev + e.key)
        break
      case '5':
        setResult(prev => prev + e.key)
        break
      case '6':
        setResult(prev => prev + e.key)
        break
      case '7':
        setResult(prev => prev + e.key)
        break
      case '8':
        setResult(prev => prev + e.key)
        break
      case '9':
        setResult(prev => prev + e.key)
        break;
      case '9':
        setResult(prev => prev + e.key)
        break
      
      case '-':
        setResult(prev => prev + e.key)
        break
      case '+':
        setResult(prev => prev + e.key)
        break
      case '/':
        setResult(prev => prev + e.key)
        break;
      case '*':
        setResult(prev => prev + e.key)
        break
      
    }
    e.preventDefault();
  }

  function handleNumberClick(e){
    const signs = '+-/*.'
    
    setResult(prev => prev + `${e.target.textContent}`)
  }

  function handleDelClick(e){
    setResult(prev => prev.slice(0,prev.length - 1))
  }

  function handleClearClick(e){
    setResult(prev => "")
  }

  function handleEqualClick(e){
    let res = String(eval(result))
    res = res.includes(".") ? res.slice(0, res.indexOf(".") + 3) : res
    setResult(res)
  }

  return (
    <div className="calculator">
      <div className="row screen">{`${result}`}</div>
      <div className="row buttons">
        <button onClick={handleClearClick}
          >C</button>
        <button onClick={handleDelClick}
          >del</button>
        <button 
          >%</button>
        <button onClick={handleNumberClick}
          className="operations">/</button>
      </div>
      <div className="row buttons">
        <button onClick={handleNumberClick}
          >7</button>
        <button onClick={handleNumberClick}
          >8</button>
        <button onClick={handleNumberClick}
          >9</button>
        <button onClick={handleNumberClick}
          className="operations">*</button>
      </div>
      <div className="row buttons">
        <button onClick={handleNumberClick}
          >4</button>
        <button onClick={handleNumberClick}
          >5</button>
        <button onClick={handleNumberClick}
          >6</button>
        <button onClick={handleNumberClick}
          className="operations">-</button>
      </div>
      <div className="row buttons">
        <button onClick={handleNumberClick}
          >1</button>
        <button onClick={handleNumberClick}
          >2</button>
        <button onClick={handleNumberClick}
          >3</button>
        <button onClick={handleNumberClick}
          className="operations">+</button>
      </div>
      <div className="row buttons">
        <button onClick={handleNumberClick}
          >0</button>
        <button onClick={handleNumberClick}
          >.</button>
        <button onClick={handleEqualClick}
          className='equal'> = </button>
      </div>
    </div>
  );
}

export default App;
