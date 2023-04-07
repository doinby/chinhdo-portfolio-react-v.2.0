const { Octokit } = require('@octokit/core');

const handler = async (event) => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});

	try {
		const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
			owner: 'doinby',
			repo: 'nation-flags-react-typescript',
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});

		return {
			statusCode: 200,
			body: JSON.stringify(data, null, 2),
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};

module.exports = { handler };
