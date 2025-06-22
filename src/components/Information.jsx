// import { useActualStore } from '../assets/useActualStore';
import { useSelector } from 'react-redux';
// import { gameStore } from '../store';
import styles from '../style/information.module.css';

const InformationLayout = (prop) => {
	return (
		<div className={styles['information-container']}>
			<h1>Игра "Крестики-нолики"</h1>
			<p className={styles.message}>{prop.gameStatus}</p>
		</div>
	);
};

export const Information = () => {
	// const { isDraw, isGameEnded, currentPlayer } = gameStore;

	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	let gameStatus = '';
	if (isDraw) {
		gameStatus = `Ничья!`;
	} else if (isGameEnded) {
		gameStatus = `Победа: ${currentPlayer} !`;
	} else if (!isGameEnded) {
		gameStatus = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout gameStatus={gameStatus} />;
};
