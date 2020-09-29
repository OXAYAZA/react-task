import React from 'react';
import './pagination.scss'

function Pagination ( props ) {
	return (
		<div className='pagination'>
			<span>Items per page: 10</span>
			<button className='pagination-button pagination-prev'/>
			<span className='pagination-items'>1 - 10</span>
			<span className='pagination-quantity'>391</span>
			<button className='pagination-button pagination-next'/>
		</div>
	);
}

export default Pagination;
