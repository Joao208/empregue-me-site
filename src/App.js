import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../src/routes'
import EmBot from './Pages/EmBot'

function App() {
  return (
    <>
    <Router>
      <Routes/>
    </Router>
      <EmBot/>
    </>

    );
}

export default App;
