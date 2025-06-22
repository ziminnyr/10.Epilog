const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'RESTART_GAME':
			return initialState;
		case 'SET_NEXT_PLAYER': {
			let result = state.currentPlayer === 'X' ? { ...state, currentPlayer: '0' } : { ...state, currentPlayer: 'X' };

			return result;
		}
		case 'SET_IS_GAME_ENDED': {
			return { ...state, isGameEnded: payload };
		}
		case 'SET_IS_DRAW': {
			return { ...state, isDraw: payload };
		}
		case 'SET_FIELD': {
			return { ...state, field: payload };
		}
		default:
			return state;
	}
};
