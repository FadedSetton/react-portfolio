function Project({ title, image, deployedLink, githubLink }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    );
  }
  
  export default Project;
  