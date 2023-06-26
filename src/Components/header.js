import logo from '../assets/img/logo.svg';
import React, { useState, useEffect } from "react";
// import Modal from './modal'

const Header = () => {
	const [isActive, setActive] = useState(false);
	const navHandler = () => {
		setActive(!isActive);
	}

	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem('isDarkMode') === 'true' ? true : false
	);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	return (
		<header className="text-slate-950 fixed w-full bg-slate-50/60 backdrop-blur-md dark:bg-gray-900/80 shadow dark:text-white/90 top-0 font-['Open_Sans'] z-10 ">
			<div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8 flex items-center justify-between h-20">
				<img src={logo} alt='logo' className="max-w-[50] sm:max-w-full brightness-100 dark:brightness-[100]" />
				<nav className='flex items-center gap-x-5'>
					<ul className={isActive ? "flex-col fixed top-20 left-0 right-0 bg-white dark:bg-black/90" : "hidden md:flex md:flex-row gap-x-5 items-center justify-center"}>
						<li><p className="cursor-pointer font-semibold text-sm">EVENTS</p></li>
						<li><p className="cursor-pointer font-semibold text-sm">MEMBERS</p></li>
						<li><p className="cursor-pointer font-semibold text-sm">CONTACT US</p></li>
						<li>
							<a href='#!' onClick={toggleDarkMode} >
								{isDarkMode ?
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
									</svg>
									:
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
									</svg>
								}
							</a>
						</li>
						<li>
							<a>	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							</a>
						</li>
					</ul>

					<div className="space-y-2 block md:hidden cursor-pointer" onClick={navHandler}>
						{!isActive ?
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
							</svg>

							: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>}
					</div>
				</nav>

			</div>


		</header >
	)
}

export default Header