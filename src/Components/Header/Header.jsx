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

	const handleSubmenuClick = (subLink) => {
		if (subLink) {
			// Optionally, you could navigate to the link if it's a valid link
		}
		setOpenSubmenuIndex(null);
	};

	return (
		<header className="absolute w-full top-0 left-0 z-10 text-white hover:bg-white">
			<nav className="hover:text-black mx-auto flex max-w-8xl items-center justify-between lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link to="#" className="-m-1.5 p-1.5">
						<h1 className="w-auto text-3xl">Starflit</h1>
					</Link>
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
							<li key={index} className="nav-item relative inline-block py-2 mx-5">
								{/* Main menu link */}
								{menu.subMenu ? (
									<div
										onMouseEnter={() => toggleSubmenu(index)}
										onMouseLeave={() => toggleSubmenu(null)}
									>
										<button className="nav-link relative block tracking-wide py-2 text-base no-underline font-medium">
											{menu.head}
											<ChevronDownIcon
												className={`h-4 w-4 inline ml-1 ${openSubmenuIndex === index ? "rotate-180" : ""}`}
												aria-hidden="true"
											/>
											{/* Dropdown for subMenu */}
											{openSubmenuIndex === index && (
												<ul className="dropdown-menu d-flex justify-around w-full block fixed py-9 mt-4 left-0 shadow-lg bg-white text-black rounded-none z-10">
													{menu.subLinks.map((slink, subIndex) => (
														<li key={subIndex}>
															<Link
																to={slink.link}
																className="dropdown-item cursor-default bg-white mb-3 p-2 text-sm hover:bg-gray-100"
																onClick={() => handleSubmenuClick(slink.link)}
															>
																{/* Render image and name */}
																{slink.img && <img src={slink.img} alt={slink.name} className="inline-block mr-2 h-4 w-4" />}
																{slink.name}
															</Link>
															{/* Check for subLinks within subLinks */}
															{slink.subLinks && (
																<ul className="pl-6">
																	{slink.subLinks.map((subSlink, subSubIndex) => (
																		<li key={subSubIndex}>
																			<Link to={subSlink.link} className="dropdown-item mb-2 p-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSubmenuClick(subSlink.link)}>
																				{subSlink.img && <img src={subSlink.img} alt={subSlink.name} className="inline-block mr-2 h-4 w-4" />}
																				{subSlink.name}
																			</Link>
																		</li>
																	))}
																</ul>
															)}
														</li>
													))}
												</ul>
											)}
										</button>
									</div>
								) : (
									<Link to={menu.link} className="nav-link relative block tracking-wide py-2 text-base no-underline font-medium">
										{menu.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>

				<button className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold">
						Call Now
					</a>
				</button>
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
												<div key={subIndex}>
													<a href={slink.link} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSubmenuClick(slink.link)}>
														{/* Render image and name for Offcanvas */}
														{slink.img && <img src={slink.img} alt={slink.name} className="inline-block mr-2 h-4 w-4" />}
														{slink.name}
													</a>
													{/* Check for subLinks within subLinks */}
													{slink.subLinks && (
														<div className="pl-4">
															{slink.subLinks.map((subSlink, subSubIndex) => (
																<a key={subSubIndex} href={subSlink.link} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSubmenuClick(subSlink.link)}>
																	{subSlink.img && <img src={subSlink.img} alt={subSlink.name} className="inline-block mr-2 h-4 w-4" />}
																	{subSlink.name}
																</a>
															))}
														</div>
													)}
												</div>
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
