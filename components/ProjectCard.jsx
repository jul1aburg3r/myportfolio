/**
 * Card component for displaying project summary with tech stack filtering
 * @param {Object} project - The project object to display
 * @param {Function} onClick - Callback when card details are clicked
 * @param {Function} onToggleTech - Callback to toggle tech filter
 * @param {Array} selectedTechs - Array of currently selected tech filters
 */
const ProjectCard = React.memo(function ProjectCard({ project, onClick, onToggleTech, selectedTechs }) {
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
});

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    impact: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onToggleTech: PropTypes.func.isRequired,
  selectedTechs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
