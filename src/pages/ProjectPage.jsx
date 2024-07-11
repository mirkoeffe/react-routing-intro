import { Link } from "react-router-dom";

function ProjectsPage(props) {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3>
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
