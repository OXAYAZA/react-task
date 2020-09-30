import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../container/container';
import ResultList from '../result-list/result-list';
import Pagination from '../pagination/pagination';
import './search.scss';

class Search extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: props.value || '',
			busy: false,
			data: null,
			items: null,
			page: props.page ? Number( props.page ) : 1
		};

		this.request = this.request.bind( this );
		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
		this.pagePrev = this.pagePrev.bind( this );
		this.pageNext = this.pageNext.bind( this );
	}

	request ( page, value ) {
		if ( !this.state.busy ) {
			this.setState({ busy: true });

			fetch( 'https://www.omdbapi.com/?apikey=8b47da7b&page='+ page +'&s='+ value )
			.then( res => res.json() )
			.then( data => {
				if ( value ) {
					this.props.history.push( '/search/'+ value +'/'+ page );
				} else {
					this.props.history.push( '' );
				}

				this.setState({
					busy: false,
					data: data,
					response: data.Response,
					items: data.totalResults ? Number( data.totalResults ) : null,
					pages: data.totalResults ? Math.ceil( data.totalResults / 10 ) : null,
					page: data.totalResults ? page : 1
				});
			});
		}
	}

	handleChange( event ) {
		this.setState({ value: event.target.value });
	}

	handleSubmit( event ) {
		event.preventDefault();
		this.request( 1, this.state.value );
	}

	pagePrev( event ) {
		console.log( 'Prev' );
		event.preventDefault();

		if ( this.state.page > 1 ) {
			this.request( this.state.page - 1, this.state.value );
		}
	}

	pageNext( event ) {
		console.log( 'Next' );
		event.preventDefault();

		if ( this.state.page < this.state.pages ) {
			this.request( this.state.page + 1, this.state.value );
		}
	}

	componentDidMount () {
		if ( this.state.value ) {
			this.request( this.state.page, this.state.value );
		}
	}

	render() {
		return (
			<section className='search'>
				<Container>
					<form className='search-form' onSubmit={this.handleSubmit}>
						<input className='search-input' name='search' type='text' value={this.state.value} onChange={this.handleChange} placeholder='Search ...'/>
						<button className='search-submit fa-search' type='submit'/>
					</form>

					{ this.state.data && this.state.data.Response === 'False' && <div className='search-message'>{this.state.data.Error}</div> }

					{ this.state.data && this.state.data.Response === 'True' && <ResultList data={ this.state.data.Search }/> }

					{ this.state.data && this.state.data.Response === 'True' &&
						<Pagination
							onPrev={ this.pagePrev }
							onNext={ this.pageNext }
							page={ this.state.page }
							items={ this.state.items }
						/>
					}
				</Container>
			</section>
		);
	}
}

export default withRouter( Search );
