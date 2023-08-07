import "./NavBar.css";
import React from "react";
import { useState, useEffect } from "react";

const LightModeButton = () => {
	const [lightMode, setLightMode] = useState(findDefaultMode);

	function findDefaultMode() {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		} else {
			return "light";
		}
	}

	function toggleLightMode() {
		lightMode === "light" ? setLightMode("dark") : setLightMode("light");
	}

	useEffect(() => {
		document.body.className = lightMode;
	}, [lightMode]);

	return (
		<button
			className='light-mode-button'
			onClick={toggleLightMode}>
			<img
				alt='Screen Mode'
				src={
					lightMode === "light"
						? "./src/Assets/Images/light-mode.png"
						: "./src/Assets/Images/dark-mode.png"
				}
				width='50'
				height='50'
			/>
		</button>
	);
};

export default LightModeButton;
