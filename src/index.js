import * as React from 'react';
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";

import { BrowserRouter as Router } from 'react-router-dom'

import '@/assets/fonts/fonts.scss';
import '@/assets/styles/global.scss';

import App from './App';
import store from "@/store";

const container = document.getElementById('root')

if(container){
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
}else{
  throw new Error('There is no root element in html')

}
