
import './App.css';
import Header from './components/Header';
import React from 'react';

const name = "Arda"

function App(){
 // return React.createElement('div', null, 'Hello')
  return(
    <div>
      <h1>Hello React</h1>
      <Header></Header>
      <p className="App-xyz">
        Bu paragraf ilk react projesinde yer alıyor yoruldum....
        <h1>{`Benim adım ${name}`}</h1>
      </p>
      <label htmlFor='myinput'>
        Name
        <input id='myinput' />
      </label>
    </div>
  )
}

export default App;