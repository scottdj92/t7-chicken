import React from 'react';
import CharacterSelect from './CharacterSelect';
import FrameDataTableHeader from './FrameDataTableHeader';
import FrameDataTable from './FrameDataTable';

export default class FrameData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selectedCharacter: 'alisa'}
		this.handleChange = this.handleChange.bind(this);
		this.renderOptions = this.renderOptions.bind(this);
	}

	handleChange(event) {
		this.setState({selectedCharacter: event.target.value});
		console.log(this.state);
	}

	renderOptions(options) {
		return Object.keys(options).map((name, key) => {
			return (
				<CharacterSelect
					key={key}
					option={name}
				/>
			)
		})
	}

	render() {
		let selected = this.state.selectedCharacter;
		const { frameData } = this.props;

		return( 
			<div className="frame-data-container container text-center">
				<h2>Frame Data</h2>
				<select onChange={this.handleChange}>
					<option defaultValue="Select Character">Select Character</option>
					{this.renderOptions(frameData)}
				</select>
				<table>
				<FrameDataTableHeader />
				{
					frameData[selected].moves.map((move, key) => {
						return (
							<FrameDataTable 
								key={key}
								notation={move.notation}
								hitLevel={move.hit_level}
								damage={move.damage}
								speed={move.speed}
								onBlock={move.on_block}
								onHit={move.on_hit}
								onCH={move.on_ch}
							/>
						);
					})
				}
				</table>
			</div>
		)
	}
 }