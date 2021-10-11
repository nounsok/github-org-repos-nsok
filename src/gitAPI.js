import axios from 'axios';

export const getAuthor = async (org, n = 3) => {
	try {
		const result = await axios.get(`https://api.github.com/orgs/${org}`);
		return result.data;
	} catch (err) {
		console.log(err);
		if (n === 1) throw err;
		return await getAuthor(org, n - 1);
	}
};

export const getRepos = async (org, repoCount, n = 3) => {
	try {
		let repos = [];
		let urls = [];
		for (let i = 1; i <= Math.ceil(repoCount / 100); i++) {
			urls.push(
				`https://api.github.com/orgs/${org}/repos?per_page=100&page=${i}`
			);
		}
		await Promise.all(urls.map((url) => axios.get(url))).then((responses) => {
			responses.forEach((res) => {
				repos = [...repos, ...res.data];
			});
		});
		return repos;
	} catch (err) {
		console.log(err);
		if (n === 1) throw err;
		return await getAuthor(org, n - 1);
	}
};

export const getCommits = async (org, repo, n = 3) => {
	try {
		const result = await axios.get(
			`https://api.github.com/repos/${org}/${repo}/commits`
		);
		return result.data;
	} catch (err) {
		console.log(err);
		if (n === 1) throw err;
		return await getAuthor(org, n - 1);
	}
};
