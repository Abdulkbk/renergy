import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className='bg-white shadow dark:bg-gray-800 z-10 w-full fixed'>
				<div className='container px-6 py-3 mx-auto md:flex'>
					<div className='flex items-center justify-between'>
						<div>
							<a
								className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
								href='#a'
							>
								Renergy
							</a>
						</div>

						{/* <!-- Mobile menu button --> */}
						<div className='flex md:hidden'>
							<button
								type='button'
								className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
								aria-label='toggle menu'
								onClick={() => setIsOpen(!isOpen)}
							>
								<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
									<path
										fillRule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
									></path>
								</svg>
							</button>
						</div>
					</div>

					{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
					<div
						className={`w-full md:flex md:items-center md:justify-between md:block ${
							isOpen ? "block" : "hidden"
						}`}
					>
						<div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 w-full'>
							<Link href='/'>
								<a className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'>
									Home
								</a>
							</Link>
							<a
								href='#about'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								About
							</a>
							<a
								href='#team'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								Team
							</a>
							<a
								href='#footer'
								className='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
