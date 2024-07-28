import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { menus } from "./Menus";
import { Link } from "react-router-dom";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [click, setClick] = useState(false);

	useEffect(() => {
		const offcanvasElement = document.getElementById("offcanvasNavbar");
		const bsOffcanvas = offcanvasElement ? window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement) : null;

		if (bsOffcanvas) {
			if (mobileMenuOpen) {
				bsOffcanvas.show();
			} else {
				bsOffcanvas.hide();
			}
		}
	}, [mobileMenuOpen]);

	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<h3 className="h-8 w-auto text-2xl">Starflit</h3>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<ul className="flex space-x-20 mb-0">
						{menus.map((menu, index) => (
							<li key={index} className="relative group" onClick={() => setClick(!click)}>
								<Link to={menu.link} className="no-underline hover:underline text-sm font-semibold leading-6 text-gray-900" key={index}>
									{menu.name}
								</Link>
								{menu.subMenu && (
									<div className="group">
										{/* <div className="flex items-center cursor-pointer"> */}
										<Link className="text-decoration-none text-sm font-semibold leading-6 text-gray-900" key={index}>
											{menu.head}
										</Link>
										{/* </div> */}
										<ul className="px-4 shadow-lg bg-clip-border rounded-xl absolute z-10 p-0 bg-white text-black space-y-1 hidden group-hover:block hover:block">
											{menu.subLinks.map((slink, subIndex) => (
												<li key={subIndex} className="w-max">
													<Link to={slink.link} key={subIndex} className="text-decoration-none text-sm font-semibold leading-6 text-gray-900">
														{slink.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Call Now
					</a>
				</div>
			</nav>

			{/* Bootstrap Offcanvas Menu */}
			<div className="offcanvas offcanvas-end offcanvas-fullscreen" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
						Starflit
					</h5>
					<button type="button" className="btn-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					{menus.map((menu, index) => (
						<div key={index} className="py-2">
							<a href={menu.link} className="d-block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
								{menu.name}
							</a>
							{menu.subMenu && (
								<div className="py-2 pl-4">
									{menu.subLinks.map((slink, subIndex) => (
										<a key={subIndex} href={slink.link} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
											{slink.name}
										</a>
									))}
								</div>
							)}
						</div>
					))}
					<div className="py-6">
						<a href="#" className="d-block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
							Call Now
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
