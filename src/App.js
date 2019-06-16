import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Presentation from './pages/Presentation';
import Formation from './pages/Formation';
import Partage from './pages/Partage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/formation" component={Formation} />
          <Route path="/partage" component={Partage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
