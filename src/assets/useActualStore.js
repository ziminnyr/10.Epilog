import { useEffect, useState } from 'react';
import { gameStore } from '../store';

export const useActualStore = () => {
	const [storeState, setStoreState] = useState(() => gameStore.getState());

	useEffect(() => {
		const unsubscribe = gameStore.subscribe(() => {
			setStoreState(gameStore.getState());
		});

		return () => unsubscribe();
	}, []);

	return storeState;
};
