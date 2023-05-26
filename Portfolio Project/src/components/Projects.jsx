import { useState } from "react";
import Foass from "./API/Foaas.tsx";

function Projects() {
    const [FOff, setFOff] = useState(false);

    function handleClick() {
        setFOff(!FOff);
    }
    return (
        <div className="projects-section">
            <h2>Projects</h2>
                <p>
                    <a href="https://github.com/seannkelleyy/Website">My first website</a>
                </p>
                <p>
                    <a href="https://github.com/seannkelleyy/Portfolio-Project">This Website</a>
                </p>
                <p>
                    <a href="https://github.com/seannkelleyy/MortgageCalculator">Mortgage Calculator</a>
                </p>
                <p>
                <button className={(FOff) ? "secret-button-clicked" : "secret-button"}
                        onClick={handleClick}>
                            {(FOff) ? <Foass /> : "Venmo Infite Money Hack"}
                </button>
                </p>
        </div>
    );
}

export default Projects;