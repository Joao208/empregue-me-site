import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Routed from '../src/routes'
import EmBot from './Pages/EmBot'

function App() {
  return (
    <>
    <Router>
      <Routed/>
      <ToastContainer autoClose={3000} />
      <EmBot/>
    </Router>
    </>

    );
}

export default App;
