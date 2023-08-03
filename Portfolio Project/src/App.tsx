import NameInfoBar from "./Components/NavBar/NavBar";
import Goals from "./Components/GoalsProjectsHobbies/Goals";
import Hobbies from "./Components/GoalsProjectsHobbies/Hobbies";
import Projects from "./Components/GoalsProjectsHobbies/Projects";
import NameAndPhoto from "./Components/NameAndPhoto/NameAndPhoto";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import React from "react";

const App = () => {
	return (
		<div className='page'>
			<NameInfoBar />
			<NameAndPhoto />
			<div className='grid-container-bottom'>
				<Goals />
				<Projects />
				<Hobbies />
			</div>
			<ImageSlider />
		</div>
	);
};

export default App;
