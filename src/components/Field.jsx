import { WIN_PATTERNS } from '../settings.js';
import { connect } from 'react-redux';
import { Component } from 'react';

/* -------------- КЛАССОВЫЙ КОМПОНЕНТ ----------------- */
class OldFieldContainer extends Component {
	state = {};
	constructor(props) {
		super(props);
	}

	makeCellPick = (event) => {
		const { isGameEnded, field, currentPlayer } = this.props;

		if (!isGameEnded) {
			const buttonId = event.target.id;

			const updatedField = [...field];
			if (updatedField[buttonId] === '') {
				updatedField[buttonId] = currentPlayer; //если поле свободно - ставим ход текущего игрока

				this.props.dispatch({ type: 'SET_FIELD', payload: updatedField });

				this.checkGameStatus(updatedField);
			}
		}
	};

	checkGameStatus = (newField) => {
		//проверка на победу
		const hasWinner = WIN_PATTERNS.some(
			(win_variant) =>
				newField[win_variant[0]] !== '' &&
				newField[win_variant[0]] === newField[win_variant[1]] &&
				newField[win_variant[0]] === newField[win_variant[2]],
		);

		if (hasWinner) {
			this.props.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return;
		}

		//проверка на ничью
		if (!newField.includes('')) {
			this.props.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			this.props.dispatch({ type: 'SET_IS_DRAW', payload: true });
			return;
		}
		//если победителей нет и есть пустые ячейки - меняем игрока
		this.props.dispatch({ type: 'SET_NEXT_PLAYER' });
	};

	render() {
		const { field } = this.props;
		return (
			<div className="content-field">
				{field.map((el, index) => (
					<button className="tic-tac-button" id={index} key={index} onClick={(event) => this.makeCellPick(event)}>
						{el}
					</button>
				))}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const OldField = connect(mapStateToProps)(OldFieldContainer);
