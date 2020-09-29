import React from 'react';
import './movie.scss';

function Movie ( props ) {
	console.log( props );
	return (
		<div className='movie'>
			{ props.poster &&
				<div className='movie-left'>
					<img className='movie-poster' src={ props.poster } alt=""/>
				</div>
			}
			<div className='movie-right'>
				<h4 className='movie-title'>{ props.title }</h4>
				<div className='movie-meta'>
					<span className='movie-year'>{ props.year }</span>
					<span className='movie-type'>{ props.type }</span>
				</div>
			</div>
		</div>
	);
}

export default Movie;
