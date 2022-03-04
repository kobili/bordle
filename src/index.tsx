import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './store/store';
import { updateTargetWord } from './store/slices/gameStateSlice';
import { getRandomWord } from './utils/words/wordsUtils';

// set random word as target
store.dispatch(updateTargetWord(getRandomWord()));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
