import axios from 'axios';

export const getAuthor = async (org) => {
	try {
		const result = await axios.get(`https://api.github.com/orgs/${org}`);
		return result.data;
	} catch (err) {
		console.log(err);
		return {};
	}
};

export const getRepos = async (org) => {
	try {
		const result = await axios.get(
			`https://api.github.com/orgs/${org}/repos`
		);
		return result.data;
	} catch (err) {
		console.log(err);
		return [];
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
		return [];
	}
};
