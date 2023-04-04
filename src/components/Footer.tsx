import { GithubWithCircle as Github } from '@styled-icons/entypo-social';
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social';
import { TwitterWithCircle as Twitter } from '@styled-icons/entypo-social';

export default function Footer() {
	return (
		<footer className='shrink'>
			<section className='w-full flex justify-evenly'>
				<Linkedin className='social-links' size='32' title='Github Link' />
				<Github className='social-links' size='32' title='Github Link' />
				<Twitter className='social-links' size='32' title='Github Link' />
			</section>
		</footer>
	);
}
