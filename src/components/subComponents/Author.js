import React, { useEffect, useState } from 'react';
import { getAuthor } from '../../gitAPI';

const Author = ({ org }) => {
	useEffect(() => {
		setTimeout(() => {
			getAuthor(org).then((response) => setAuthor(response));
		}, 1000);
	}, [org]);

	const [author, setAuthor] = useState({});

	return (
		<div className='author-container'>
			<div className='author-info'>
				<img
					src={author.avatar_url}
					style={{ width: '100px', height: '100px' }}
					alt='alt source'
				></img>
				<h2 className='author-header'>
					{author.name} Repositories on Github
				</h2>
			</div>

			<ul className='author-details'>
				<li>
					<div className='author-icon'>
						<i className='fas fa-boxes'></i>
					</div>
					<div className='icon-description'>
						<p>{author.public_repos} Repositories</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-map-marker-alt'></i>
					</div>
					<div className='icon-description'>
						<p>{author.location}</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fab fa-github'></i>
					</div>
					<div className='icon-description'>
						<p>{author.html_url}</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-link'></i>
					</div>
					<div className='icon-description'>
						<p>{author.url}</p>
					</div>
				</li>
				<li>
					<div className='author-icon'>
						<i className='fas fa-envelope'></i>
					</div>
					<div className='icon-description'>
						<p>{author.email}</p>
					</div>
				</li>
				<li>
					<div className='author-icon disclaimer'>
						<i
							className='fas fa-exclamation'
							style={{ color: '#b20710', fontSize: 20 }}
						></i>
					</div>
					<div className='icon-description'>
						<p style={{ color: '#b20710', fontSize: 15 }}>
							This project is for educational purposes
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Author;
