import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://113a03dfe3054ebab5a4f0ebe902b2ee@o382729.ingest.sentry.io/5280830"});

ReactDOM.render(<App />, document.getElementById('root'));
