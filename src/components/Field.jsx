import { gameStore } from '../store';
import styles from '../style/field.module.css';
import { WIN_PATTERNS } from '../assets/settings.js';
import { useSelector } from 'react-redux';

// проверка выбранной ячейки, и изменение статуса игры
const makeCellPick = (event) => {
	const { isGameEnded, field, currentPlayer } = gameStore.getState();

	if (!isGameEnded) {
		const buttonId = event.target.id;

		const updatedField = [...field];
		if (updatedField[buttonId] === '') {
			updatedField[buttonId] = currentPlayer; //если поле свободно - ставим ход текущего игрока

			gameStore.dispatch({ type: 'SET_FIELD', payload: updatedField });

			checkGameStatus(updatedField);
		}
	}
};

//функция изменения статуса игры
const checkGameStatus = (newField) => {
	//проверка на победу
	const hasWinner = WIN_PATTERNS.some(
		(win_variant) =>
			newField[win_variant[0]] !== '' &&
			newField[win_variant[0]] === newField[win_variant[1]] &&
			newField[win_variant[0]] === newField[win_variant[2]],
	);

	if (hasWinner) {
		gameStore.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
		return;
	}

	//проверка на ничью
	if (!newField.includes('')) {
		gameStore.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
		gameStore.dispatch({ type: 'SET_IS_DRAW', payload: true });
		return;
	}
	//если победителей нет и есть пустые ячейки - меняем игрока
	gameStore.dispatch({ type: 'SET_NEXT_PLAYER' });
};

const FieldLayout = () => {
	const field = useSelector((state) => state.field);
	return (
		<div className={styles['content-field']}>
			{field.map((el, index) => (
				<button className={styles['tic-tac-button']} id={index} key={index} onClick={(event) => makeCellPick(event)}>
					{el}
				</button>
			))}
		</div>
	);
};

export const Field = () => {
	return <FieldLayout />;
};
