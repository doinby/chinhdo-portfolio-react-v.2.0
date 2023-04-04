export default function Header() {
	return (
		<header className='flex justify-between'>
			<a href='/' type='text/html' className='text-orange-500 font-header text-xl'>
				doinby.co
			</a>
			<ul>
				<li>
					<a
						href=''
						className='text-orange-500 text-lg hover:underline hover:underline-offset-4'>
						Send me an email
					</a>
				</li>
			</ul>
		</header>
	);
}
