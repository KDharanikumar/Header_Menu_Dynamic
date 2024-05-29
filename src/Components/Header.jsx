import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const products = [
	{ name: "Home", description: "Get a better understanding of your traffic", href: "#" },
	{ name: "Pricing", description: "Speak directly to your customers", href: "#" },
	{ name: "Features", description: "Your customers’ data will be safe and secure", href: "#" },
	{ name: "About Us", description: "Connect with third-party tools", href: "#" },
	{ name: "Services", description: "Build strategic funnels that will convert", href: "#" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<h3 className="h-8 w-auto text-2xl">Starflit</h3>
						{/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
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
							<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
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
			<Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<h1>Starflit</h1>
							{/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
						</a>
						<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div>
						{products.map((product) => (
							<div key={product.name}>
								<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									{product.name}
								</a>
							</div>
						))}
					</div>
					<div className="py-6">
						<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
							Call Now
						</a>
					</div>
				</div>
			</Dialog>
		</header>
	);
}
