import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'


import '@/assets/fonts/fonts.scss';
import App from './App';

const container = document.getElementById('root')

if(container){
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}else{
  throw new Error('There is no root element in html')

}
