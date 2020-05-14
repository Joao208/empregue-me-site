import React from 'react';

import Routes from '../src/routes'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './globalstyle'

function App() {
  return (
    <>
      <Routes/>
      <ToastContainer />
      <GlobalStyle/>
    </>

    );
}

export default App;
