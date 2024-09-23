import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { menus } from "./Menus";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

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

	const toggleSubmenu = (index) => {
		setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
	};

	return (
		<header className="text-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between lg:py-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<h1 className="h-8 w-auto text-3xl">Starflit</h1>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<ul className="navbar flex space-x-20 mb-0">
						{menus.map((menu, index) => (
							<li key={index} className="nav-item">
								{/* Main menu link */}
								{menu.subMenu ? (
									<div className="nav-items dropdown"
										onMouseEnter={() => toggleSubmenu(index)}
										onMouseLeave={() => toggleSubmenu(null)}
									>
										<button className="nav-link dropdown-toggle text-decoration-none text-sm font-semibold leading-6">
											{menu.head}
											<ChevronDownIcon
												className={`h-4 w-4 inline ml-1 transition-transform ${openSubmenuIndex === index ? "rotate-180" : ""}`}
												aria-hidden="true"
											/>
										</button>
										{/* Dropdown for subMenu */}
										{openSubmenuIndex === index && (
											<ul className="dropdown-menu absolute left-0 mt-2 w-full p-2 shadow-lg bg-white text-black rounded-md z-10">
												{menu.subLinks.map((slink, subIndex) => (
													<li key={subIndex} >
														<Link to={slink.link} className="dropdown-item block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
															{slink.name}
														</Link>
													</li>
												))}
											</ul>
										)}
									</div>
								) : (
									<Link to={menu.link} className="nav-link no-underline hover:underline text-sm font-semibold leading-6">
										{menu.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6">
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
							{/* Main menu link for Offcanvas */}
							<a
								href={menu.link}
								className="d-block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								{menu.name}
							</a>
							{/* Offcanvas dropdown for subMenu */}
							{menu.subMenu && (
								<div className="py-2 pl-4">
									<button onClick={() => toggleSubmenu(index)} className="flex items-center text-base font-semibold text-gray-900 hover:bg-gray-50">
										{menu.head}
										<ChevronDownIcon
											className={`h-4 w-4 inline ml-1 transition-transform ${openSubmenuIndex === index ? "rotate-180" : ""}`}
											aria-hidden="true"
										/>
									</button>
									{openSubmenuIndex === index && (
										<div className="pl-4">
											{menu.subLinks.map((slink, subIndex) => (
												<a key={subIndex} href={slink.link} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
													{slink.name}
												</a>
											))}
										</div>
									)}
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
