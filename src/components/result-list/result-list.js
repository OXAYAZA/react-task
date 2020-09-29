import React from 'react';
import Movie from '../movie/movie';
import './result-list.scss';

function ResultList ( props ) {
	return (
		<ul className='result-list'>
			{ props.data.map( ( item, key ) => {
				return (
					<li className='result-item' key={'item-'+ key}>
						<Movie title={item.Title} year={item.Year} type={item.Type} poster={item.Poster !== 'N/A' && item.Poster}/>
					</li>
				);
			} )}
		</ul>
	);
}

export default ResultList;
