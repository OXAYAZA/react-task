import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../slider/slider';
import Intro from '../intro/intro';
import Search from '../search/search';

function Home () {
	let { id, page } = useParams();

	return (
		<main>
			<Slider/>
			<Intro/>
			<Search value={id} page={page}/>
		</main>
	);
}

export default Home;
