import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { loadState } from './localStorage';
import { createStore } from 'redux';
import Reducer from './components/reducer/Reducer';

const persistedState = loadState();
const store = createStore(Reducer, persistedState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
