import React from 'react';
import './pagination.scss'

function Pagination ( props ) {
	let
		firstItemNumber = 10 * ( props.page - 1 ) + 1,
		lastItemNumber = props.page * 10;

	lastItemNumber = lastItemNumber > props.items ? props.items : lastItemNumber;

	return (
		<div className='pagination'>
			<div className='pagination-ipp'>Items per page: 10</div>
			<div className='pagination-arrows'>
				<div className='pagination-left'>
					<button className='pagination-button pagination-prev' onClick={ props.onPrev }/>
					<span className='pagination-items'>{ firstItemNumber } - { lastItemNumber }</span>
				</div>
				<div className='pagination-right'>
					<span className='pagination-quantity'>{ props.items }</span>
					<button className='pagination-button pagination-next'  onClick={ props.onNext }/>
				</div>
			</div>
		</div>
	);
}

export default Pagination;
