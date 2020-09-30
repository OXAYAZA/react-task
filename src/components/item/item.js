import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../container/container';
import img1 from '../../images/img-01.jpg';
import './item.scss';

class Item extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { data: null };
	}

	componentDidMount () {
		fetch( 'https://www.omdbapi.com/?apikey=8b47da7b&plot=full&i=' + this.props.match.params.id )
			.then( res => res.json() )
			.then( data => {
				this.setState({ data: data });
			});
	}

	render () {
		return (
			<main className='item'>
				<header className='item-header'>
					<div className='item-header-bg' style={{ backgroundImage: `url(${img1})` }}/>
					<Container>
						<button className='back-btn' onClick={this.props.history.goBack}>Back</button>
					</Container>
				</header>

				<section className='item-section'>
					<Container>
						<div className="item-row">
							<div className="item-column item-column-left">
								{ this.state.data && this.state.data.Poster && this.state.data.Poster !== 'N/A' && <img className='item-poster' src={this.state.data.Poster} alt=''/> }
								{ this.state.data && this.state.data.imdbRating && <div className='item-rating'>IMDB Rating:<br/>{this.state.data.imdbRating} / 10</div> }
							</div>

							<div className="item-column item-column-right">
								{ this.state.data && this.state.data.Title && <h1 className='item-title'>{this.state.data.Title}</h1> }
								<div className='item-meta'>
									{ this.state.data && this.state.data.Runtime && <div>Runtime: <span className="item-meta-value">{this.state.data.Runtime}</span></div> }
									{ this.state.data && this.state.data.Genre && <div>Genre: <span className="item-meta-value">{this.state.data.Genre}</span></div> }
									{ this.state.data && this.state.data.Year && <div>Year: <span className="item-meta-value">{this.state.data.Year}</span></div> }
									{ this.state.data && this.state.data.Type && <div>Type: <span className="item-meta-value">{this.state.data.Type}</span></div> }
								</div>
								{ this.state.data && this.state.data.Plot && <div className="item-plot"><p>{this.state.data.Plot}</p></div> }
							</div>
						</div>
					</Container>
				</section>
			</main>
		);
	}
}

export default withRouter( Item );
