const { useEffect } = React;

/**
 * Modal component for displaying detailed project information
 * @param {Object} project - The project object to display
 * @param {Function} onClose - Callback function to close the modal
 */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay modal-entering" onClick={onClose}>
      <div className="modal modal-entering" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <div>
              {project.icon && (
                <div className="modal-icon">
                  <i data-lucide={project.icon}></i>
                </div>
              )}
              <h2>{project.name}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
            <button className="close-btn" onClick={onClose} aria-label="Close modal">×</button>
          </div>

          <div className="tech-stack modal-tech-stack">
            {project.techStack.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="modal-section">
            <h3>Problemstellung</h3>
            <p>{project.details.problem}</p>
          </div>

          <div className="modal-section">
            <h3>Lösung</h3>
            <p>{project.details.solution}</p>
          </div>

          {project.details.architecture && (
            <div className="modal-section">
              <h3>Architektur</h3>
              <p>{project.details.architecture}</p>
            </div>
          )}

          {project.details.image && (
            <div className="modal-section">
              <img src={project.details.image} alt={project.details.imageAlt || project.name} className="modal-image" />
              {project.details.imageAlt && (
                <p className="image-caption">{project.details.imageAlt}</p>
              )}
            </div>
          )}

          {project.details.codeSnippet && (
            <div className="modal-section">
              <h3>Code-Beispiel</h3>
              <pre className="code-block">{project.details.codeSnippet}</pre>
            </div>
          )}

          {project.details.lessonsLearned && (
            <div className="modal-section">
              <h3>Lessons Learned</h3>
              <p>{project.details.lessonsLearned}</p>
            </div>
          )}

          <div className="modal-impact">
            Impact: {project.impact}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    impact: PropTypes.string.isRequired,
    icon: PropTypes.string,
    details: PropTypes.shape({
      problem: PropTypes.string.isRequired,
      solution: PropTypes.string.isRequired,
      architecture: PropTypes.string,
      codeSnippet: PropTypes.string,
      lessonsLearned: PropTypes.string,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
