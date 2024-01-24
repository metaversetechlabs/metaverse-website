import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';
const TRACKING_ID = import.meta.env.VITE_REACT_APP_TRACKING_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize('G - GCJ7487YXK');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
