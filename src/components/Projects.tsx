import ProjectCard from './ProjectCard';
import { repoData } from '../_data';

export default function Projects() {
	const URL = 'http://localhost:9999/.netlify/functions/fetchRepo/';

	const projectCards = repoData.map((repo) => (
		<ProjectCard
			key={repo.slug}
			name={repo.name}
			url={`${URL}?owner=${repo.owner}&repo=${repo.slug}`}
		/>
	));

	return (
		<section className='flex flex-col gap-6 px-16 py-14'>
			<h2 className='font-header text-2xl text-center'>
				Projects I've worked on:
			</h2>
			{projectCards}
		</section>
	);
}
