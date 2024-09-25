export const menus = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About Us",
		link: "/aboutus",
	},
	{
		head: "Services",
		subMenu: true,
		subLinks: [
			{
				name: "SOFTWARE DEVELPMENT",
				// link: "/softwaredevelopment",
				subLinks: [
					{ img: "/src/Images/icon.png", name: "Web Design", link: "/softwaredevelopment/webdesign" },
					{ img: "/src/Images/icon.png", name: "Web Development", link: "/softwaredevelopment/webdevelpment" },
					{ img: "/src/Images/icon.png", name: "Mobile Development", link: "/softwaredevelopment/mobiledevelopment" },
					{ img: "/src/Images/icon.png", name: "Wordpress Development", link: "/softwaredevelopment/mobiledevelopment" },
				],
			},
			{
				name: "DESIGN",
				// link: "/design",
				subLinks: [
					{ img: "/src/Images/icon.png", name: "UI Design", link: "/design/uidesign" },
					{ img: "/src/Images/icon.png", name: "UX Design", link: "/design/uxdesign" },
					{ img: "/src/Images/icon.png", name: "Prototyping", link: "/design/prototyping" },
					{ img: "/src/Images/icon.png", name: "Wireframing", link: "/design/wireframing" },
				],
			},
			{
				name: "TESTING",
				// link: "/services3",
				subLinks: [
					{ img: "/src/Images/icon.png", name: "Manual Testing", link: "/testing/manualtesting" },
					{ img: "/src/Images/icon.png", name: "Automation Testing", link: "/testing/automationtesting" },
				],
			},
		],
	},
	{
		name: "Contact",
		link: "/contact",
	},
];
