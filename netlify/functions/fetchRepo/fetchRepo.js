const { Octokit } = require('@octokit/core');

const handler = async (event) => {
	// ?owner=doinby&repo=nation-flags-react-typescript
	const { owner, repo } = event.queryStringParameters;

	const header = {
		owner: owner,
		repo: repo,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	};

	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});

	try {
		const { data } = await octokit.request('GET /repos/{owner}/{repo}', header);

		return {
			statusCode: 200,
			body: JSON.stringify(data, null, 2),
		};
	} catch (err) {
		return { statusCode: 500, body: err.toString() };
	}
};

module.exports = { handler };
