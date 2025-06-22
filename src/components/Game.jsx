import React from 'react';
import styles from '../style/index.module.css';

import { Information } from './Information.jsx';
import { Field } from './Field.jsx';
import { gameStore } from '../store.js';

//Кнопка "Начать заново"
const startAgain = () => {
	gameStore.dispatch({ type: 'RESTART_GAME' });
};

const GameLayout = () => (
	<div className={styles.container}>
		<Information />
		<Field />

		<button className={styles['start-again']} onClick={() => startAgain()}>
			Начать заново
		</button>
	</div>
);

export const Game = () => {
	return <GameLayout />;
};
