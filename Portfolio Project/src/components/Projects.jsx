import { ProjectsData } from "../Assets/Data/projectsData";

const Projects = () =>{
    return (
        <div className="projects-section">
            <h2>Projects</h2>
            {ProjectsData.map((project, index) => {
                return (
                    <p key={index}>
                        <a href={project.link}>{project.title}</a>
                    </p>
                )
            })}
        </div>
    );
}

export default Projects;