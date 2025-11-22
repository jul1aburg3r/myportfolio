function ProjectCard({ project, onClick, onToggleTech, selectedTechs }) {
  const handleTechClick = (e, tech) => {
    e.stopPropagation();
    onToggleTech(tech);
  };

  return (
    <div className="card">
      {project.icon && (
        <div className="card-icon">
          <i data-lucide={project.icon}></i>
        </div>
      )}
      <h3>{project.name}</h3>
      <p className="card-tagline">{project.tagline}</p>
      <p className="card-description">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map(tech => (
          <span
            key={tech}
            className={`tech-badge ${selectedTechs.includes(tech) ? 'active' : ''}`}
            onClick={(e) => handleTechClick(e, tech)}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="card-footer">
        <span className="impact">{project.impact}</span>
        <span className="see-details" onClick={onClick}>Details</span>
      </div>
    </div>
  );
}
