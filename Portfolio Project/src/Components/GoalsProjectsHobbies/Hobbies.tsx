import "./GoalsProjectsHobbies.css";
import { HobbiesData } from "../../Assets/Data/HobbiesData";
import React from "react";

const Hobbies = () => {
	return (
		<div className='hobbies-section'>
			<h2>Hobbies</h2>
			{HobbiesData.map((hobby, index) => {
				return <p key={index}>{hobby.hobby}</p>;
			})}
		</div>
	);
};

export default Hobbies;
