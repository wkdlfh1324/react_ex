import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CountHookComponent></CountHookComponent>
        {/* <HelloBox></HelloBox> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
