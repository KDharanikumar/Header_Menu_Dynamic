import React from "react";
import { Route, Routes } from "react-router-dom";
import { menus } from "../Components/Menus"; // Import the menus array
// Import all page components here
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Services1 from "../Pages/Services1";

// Create a map of path to component for easy lookup
const componentMap = {
	"/home": Home,
	"/about": About,
	"/contact": Contact,
	"/services1": Services1,
};

const Navigation = () => {
	return (
		<section className="navigation">
			<Routes>
				{menus.map((menu, index) => (
					<Route key={index} path={menu.link} element={componentMap[menu.link] ? React.createElement(componentMap[menu.link]) : null} />
				))}
				{menus
					.filter((menu) => menu.subMenu)
					.flatMap((menu) =>
						menu.subLinks.map((slink, subIndex) => (
							<Route key={subIndex} path={slink.link} element={componentMap[slink.link] ? React.createElement(componentMap[slink.link]) : null} />
						))
					)}
			</Routes>
		</section>
	);
};
export default Navigation;
