import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello again</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a classname="navbar-brand" href={'http://www.google.se'}>Go2Work</a>
      
      {/* Collapse button */}
      <button className="navbar-toggler navbar-light bg-primary" type="button" data-toggle="collapse" 
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <button type="button" className="btn btn-outline-primary bg-light" >
          LOGGA IN    
        </button>    
      
        <button type="button" className="btn btn-outline-primary bg-light" >
          SKAPA KONTO    
        </button> 
      </div>
    </nav>
  );
}

export default App;

