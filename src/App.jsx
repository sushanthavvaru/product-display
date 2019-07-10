import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './Components/Home/home'
import Header from './Components/Header/header'

class App extends Component {

  render() {
    return (
    <div className="App">
        <BrowserRouter>
            
            <div className="contents">
              <Header />
              <Route path = '/' exact component = {Home} />
            </div>
                
          </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
