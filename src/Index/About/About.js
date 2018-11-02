import React, { Component } from 'react';
import './About.css';
import gallery1 from './gallery_1.jpg';
import gallery2 from './gallery_2.jpg';
import gallery3 from './gallery_3.jpg';
import gallery4 from './gallery_4.jpg';
import gallery5 from './gallery_5.jpg';
import gallery6 from './gallery_6.jpg';

class About extends Component {
    render() {
        return (
    <div>
    <section id="about" class="callout about">
		<article class="wrap">
			<h2>About The Magazine</h2>
			<h3>A Lifestyle Magazine Crafted with Love</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque facere quibusdam rerum, maiores consequuntur, aliquam esse blanditiis eum a libero fuga consectetur non neque amet rem impedit quos, fugit. Culpa ratione iure facilis est ea, ducimus neque voluptas fugiat velit unde ipsam suscipit laudantium cupiditate, officiis eaque id? Eaque ad, nisi assumenda facere qui accusantium alias, fugit adipisci natus.</p>
			<p>Dignissimos quasi nisi maiores dolor sunt. Fuga unde, rem quo sint dolore est pariatur cupiditate nostrum et suscipit, aperiam aliquam officia libero vel error modi ratione, dolorem consectetur doloribus mollitia! Temporibus aliquid laboriosam expedita quia, id consectetur culpa? Enim iusto ab facere aliquid cumque aut amet tenetur dolores, iure tempora perspiciatis incidunt eveniet nostrum, ea esse doloribus labore unde nobis?</p>
		</article>
	</section>
	<section id="gallery">
		<div class="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
				<img src={gallery1} alt="" />
				<img src={gallery2} alt="" />
				<img src={gallery3} alt="" />
				<img src={gallery4} alt="" />
				<img src={gallery5} alt="" />
				<img src={gallery6} alt="" />
			</div>
		</div>
    </section>
    </div>
        );
    }
}

export default About;