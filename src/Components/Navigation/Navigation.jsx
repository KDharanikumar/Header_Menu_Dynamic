import React from "react";
import { Route, Routes } from "react-router-dom";
import { menus } from "../../Components/Header/Menus"; // Import the menus array
// Import all page components here
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

// Create a map of path to component for easy lookup
const componentMap = {
	"/home": Home,
	"/aboutus": AboutUs,
	"/contact": Contact,
	"/services": Services,
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
