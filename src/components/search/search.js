import React from 'react';
import Container from '../container/container';
import ResultList from '../result-list/result-list';
import Pagination from '../pagination/pagination';
import './search.scss';

class Search extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: '',
			busy: false,
			data: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange( event ) {
		this.setState({ value: event.target.value });
	}

	handleSubmit( event ) {
		event.preventDefault();

		if ( !this.state.busy ) {
			this.setState({ busy: true });

			fetch( 'http://www.omdbapi.com/?apikey=8b47da7b&s='+ this.state.value )
				.then( res => res.json() )
				.then( data => {
					console.log( data );
					this.setState({
						busy: false,
						data: data
					});
				});
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
					{ this.state.data && this.state.data.Response === 'True' && <Pagination/> }

					{/*{ this.state.data && <pre>{JSON.stringify( this.state.data, null, 2 )}</pre> }*/}
				</Container>
			</section>
		);
	}
}

export default Search;
