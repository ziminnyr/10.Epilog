import { useActualStore } from '../assets/useActualStore';
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
	const storeState = useActualStore();

	const { isDraw, isGameEnded, currentPlayer } = storeState;

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
