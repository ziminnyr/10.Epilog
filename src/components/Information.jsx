import { Component } from 'react';
import { connect } from 'react-redux';

class OldInformationContainer extends Component {
	state = {};
	constructor(props) {
		super(props);
	}
	getGameStatus = () => {
		const { isDraw, isGameEnded, currentPlayer } = this.props;
		let gameStatusPhrase = '';
		if (isDraw) {
			gameStatusPhrase = `Ничья!`;
		} else if (isGameEnded) {
			gameStatusPhrase = `Победа: ${currentPlayer} !`;
		} else if (!isGameEnded) {
			gameStatusPhrase = `Ходит: ${currentPlayer}`;
		}
		return gameStatusPhrase;
	};

	render() {
		const gameStatus = this.getGameStatus();
		return (
			<div className="block">
				<h1>Игра "Крестики-нолики"</h1>
				<p className="text-base font-black justify-self-center text-[#fcc9c9]">{gameStatus}</p>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const OldInformation = connect(mapStateToProps)(OldInformationContainer);
