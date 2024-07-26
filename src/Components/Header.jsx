import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const products = [
	{ name: "Home", href: "#" },
	{ name: "Pricing", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "About Us", href: "#" },
	{ name: "Services", href: "#" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
					{products.map((product) => (
						<div key={product.name}>
							<a href={product.href} className="text-sm font-semibold leading-6 text-gray-900">
								{product.name}
							</a>
						</div>
					))}
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
					{products.map((product) => (
						<div key={product.name} className="py-2">
							<a href={product.href} className="d-block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
								{product.name}
							</a>
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
