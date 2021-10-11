import axios from 'axios';

export const getAuthor = async (org, n) => {
	try {
		const result = await axios.get(`https://api.github.com/orgs/${org}`);
		return result.data;
	} catch (err) {
		console.log(err);
		if (n === 1) throw err;
		return await getAuthor(org, n - 1);
	}
};

export const getRepos = async (org, repoCount) => {
	try {
		let repos = [];
		for (let i = 1; i <= Math.ceil(repoCount / 100); i++) {
			let result = await axios.get(
				`https://api.github.com/orgs/${org}/repos?per_page=100&page=${i}`
			);
			repos = repos.concat(result.data);
		}
		return repos;
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getCommits = async (org, repo) => {
	try {
		const result = await axios.get(
			`https://api.github.com/repos/${org}/${repo}/commits`
		);
		return result.data;
	} catch (err) {
		console.log(err);
		return err;
	}
};
