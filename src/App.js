import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routed from '../src/routes'
import EmBot from './Pages/EmBot'

function App() {
  return (
    <>
    <Router>
      <Routed/>
    </Router>
      <EmBot/>
    </>

    );
}

export default App;
