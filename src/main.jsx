import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { OldGame } from './components/Game.jsx';
import { gameStore } from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={gameStore}>
			<OldGame />
		</Provider>
	</React.StrictMode>,
);
