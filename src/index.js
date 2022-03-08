import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {StateProvider} from './Components/StateProvider';
import reducer,{initState} from './Components/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initState={initState} reducer={reducer}>
    <App />
    </StateProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);


