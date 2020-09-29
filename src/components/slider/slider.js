import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './slider.scss';

import slide1 from '../../images/slide-01.jpg';
import slide2 from '../../images/slide-02.jpg';

SwiperCore.use([ Navigation ]);

function Slider () {
	const slides = [
		{
			year: '2020',
			title: 'Superman',
			color: 'dark',
			image: slide1
		},
		{
			year: '2020',
			title: 'Batman',
			color: 'light',
			image: slide2
		}
	];

	return (
		<Swiper tag='section' loop navigation>
			{slides.map( function ( slide, item ) {
				return (
					<SwiperSlide key={`slide-${item}`}>
						<div className='swiper-slide-image' style={{ backgroundImage: `url(${slide.image})` }}/>
						<div className={'swiper-slide-content swiper-slide-'+ slide.color }>
							<div className='swiper-slide-year'>{slide.year}</div>
							<div className='swiper-slide-title'>{slide.title}</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default Slider;
