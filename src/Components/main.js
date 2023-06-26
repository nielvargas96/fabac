import video from "../assets/img/video.png"

const Main = () => {
	return (
		<main className="bg-white dark:bg-gray-900 pt-24 z-auto">
			<section className="px-2">

				<div className="flex items-center justify-center w-full ">
					<img src={video} alt="video" />
				</div>

				<div className="max-w-7xl text-left mx-auto sm:px-6 lg:px-8 text-gray-900 mb-20">
					<h1 className="font-extrabold text-3xl md:text-4xl font-[900] mt-6 mb-4 font-medium text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-300 dark:to-cyan-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
					<p className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</section>

			<section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
				<div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
					<div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
				</div>
				<div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
					<div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							<a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
							<a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
							<a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
							<a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
							</div>
							<div className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
							</div>
							<div className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">Hours per week</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
							</div>
							<div className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">Paid time off</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>
		</main >
	)
}

export default Main;