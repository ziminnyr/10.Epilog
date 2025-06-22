import { createStore } from 'redux';
import { appReducer } from './reducer.js';

export const gameStore = createStore(appReducer);

gameStore.dispatch({ type: 'START' });
