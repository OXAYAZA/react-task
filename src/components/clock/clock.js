import React from 'react';
import ClassList from '../../util/class-list';
import './clock.scss';

class Clock extends React.Component {
	constructor( props ) {
		super( props );
		this.classList = new ClassList( 'clock' );

		this.state = {
			date: new Date(),
			className: this.classList.str()
		};

		this.handleClick = this.handleClick.bind( this );
	}

	componentDidMount() {
		this.timerID = setInterval( () => this.tick(), 1000 );
	}

	componentWillUnmount() {
		clearInterval( this.timerID );
	}

	tick() {
		this.setState({ date: new Date() });
	}

	handleClick() {
		this.classList.toggle( 'clock-active' );
		this.setState({ className: this.classList.str() });
	}

	render() {
		return (
			<span onClick={this.handleClick} className={this.state.className}>{this.state.date.toLocaleTimeString()}</span>
		);
	}
}

export default Clock;
