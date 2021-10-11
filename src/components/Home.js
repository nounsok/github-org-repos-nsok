import React, { useState, useEffect, Fragment } from 'react';
import Author from './subComponents/Author';
import RepoList from './subComponents/RepoList';
import Spinner from './subComponents/Spinner';
import Error from './Error';
import { getAuthor, getRepos } from './../gitAPI';

const Home = ({ org }) => {
	const [author, setAuthor] = useState({});
	const [repos, setRepos] = useState([]);
	const [httpStatus, setHttpStatus] = useState(200);
	const [isLoading, setIsLoading] = useState(false);

	const setLoading = (loading, status = 200) => {
		if (loading) {
			setAuthor({});
			setRepos([]);
		}
		setHttpStatus(status);
		setIsLoading(loading);
	};

	useEffect(() => {
		setLoading(true);
		getAuthor(org)
			.then((response) => {
				getRepos(org, response.public_repos)
					.then((res) => {
						setRepos(
							res.sort((a, b) => b.stargazers_count - a.stargazers_count)
						);
						setAuthor(response);
						setLoading(false);
					})
					.catch((err) => {
						setLoading(false, err.response.status);
						console.log(err);
					});
			})
			.catch((err) => {
				setLoading(false, err.response.status);
				console.log(err);
			});
	}, [org]);

	return (
		<Fragment>
			{httpStatus === 200 ? (
				<Fragment>
					{isLoading ? <Spinner /> : null}
					<div className='container'>
						<div className='container2of3'>
							<RepoList repos={repos} />
						</div>
						<div className='container1of3'>
							<Author author={author} />
						</div>
					</div>
				</Fragment>
			) : (
				<Error status={httpStatus} />
			)}
		</Fragment>
	);
};

export default Home;
