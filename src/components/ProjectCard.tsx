interface Props {
	name: string;
	desc: string;
	liveUrl: string;
}

export default function ProjectCard({ name, desc, liveUrl }: Props) {
	return (
		<article>
			<h3>{name}</h3>
			<img src='' alt={`${name} Screenshot`} />
			<p>{desc}</p>
			<button>Live Demo</button>
		</article>
	);
}
