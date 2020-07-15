import React,{ useState } from 'react';
import './App.css';

const countChar = (stone, myStones) => {
  let sum = 0;
  for (let i = 0; i < myStones.length; i++) {
    if (stone === myStones[i]) sum++;
  }
  return sum;
}

const countJewel = (j, S) => {
  let sum = 0;
  for(let i = 0; i < j.length; i++) {
    sum += countChar(j[i], S)
  }
  return sum;
}

const checkJewels = (j) => {
  for(let i = 0; i < j.length; i++) {
    if(countChar(j[i], j) > 1) return false;
  }
  return true;
}

function App() {
  const maxLength = 50;
  const [j, setJewels] = useState('');
  const [S, setStones] = useState('');

  const handleChangeJewels = (event) => {
    const v = event.target.value;
    if(v.length <= maxLength && checkJewels(v)) {
      setJewels(v);
    }
  }

  const handleChangeStones = (event) => {
    const v = event.target.value;
    if(v.length <= maxLength) {
      setStones(v);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(j && S) {
      const c = countJewel(j, S)
      alert('Result: ' + c)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Jewels: <input type="text" name="jewels" value={j} onChange={handleChangeJewels} /> 
        </label>
        <br />
        <label>
          Stones:  <input type="text" name="stones" value={S} onChange={handleChangeStones}  /> 
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
