function ProjectCard({ project, onClick }) {
  return (
    <div className="card" onClick={onClick}>
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
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="card-footer">
        <span className="impact">{project.impact}</span>
        <span className="see-details">Details</span>
      </div>
    </div>
  );
}
