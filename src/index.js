import React from 'react';
import ReactDOM from 'react-dom/client';
import Checkbox from './components/Checkbox';
import Star from './components/Star';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Star />
    <br />
    <Checkbox />
  </React.StrictMode>
);




