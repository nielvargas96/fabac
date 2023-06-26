import logo from '../assets/img/logo.svg';

const Footer = () => {
	return (

		<footer className="bg-white shadow dark:bg-gray-900 ">
			<div className="w-full max-w-screen-xl mx-auto p-4 py-8">
				<div className="flex justify-center items-center flex-col sm:flex-row sm:items-center sm:justify-between">
					<a href="#!" className="flex items-center mb-6 sm:mb-0">
						<img src={logo} alt='logo' className="h-100 brightness-100 dark:brightness-[200]" />
					</a>
					<ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#!" className="mr-4 hover:underline md:mr-6 ">Events</a>
						</li>
						<li>
							<a href="#!" className="mr-4 hover:underline md:mr-6">Members</a>
						</li>
						<li>
							<a href="#!" className="mr-4 hover:underline md:mr-6 ">Contact Us</a>
						</li>
						<li>
							<a href="#!" className="hover:underline">Privacy Policy</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">FABAC</a>. All Rights Reserved.</span>
			</div>
		</footer>

	)
}

export default Footer