import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Page/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log("Click me");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href={'http://www.google.se'}>Go2Work</a>
        
        {/* Collapse button */}
        <button className="navbar-toggler navbar-light bg-primary" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button type="button" className="btn btn-outline-primary bg-light" onClick={this.handleLogin} >
            LOGGA IN    
          </button>    
        
          <button type="button" className="btn btn-outline-primary bg-light" >
            SKAPA KONTO    
          </button> 
        </div>
      </nav>
    );
  }
}

function Page() {
  return (
  <div id="pageForm">
    <p>Hello, this is a p</p>
  </div>
  );
}

export default App;