import { Component } from 'react';
import { connect } from 'react-redux';
import '../style/index.css';
import { OldInformation } from './Information.jsx';
import { OldField } from './Field.jsx';

class OldGameContainer extends Component {
	state = {};
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="block justify-items-center">
				<OldInformation />
				<OldField />

				<button
					className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
					onClick={this.props.startAgain}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAgain: () => dispatch({ type: 'RESTART_GAME' }),
});

export const OldGame = connect(null, mapDispatchToProps)(OldGameContainer);
