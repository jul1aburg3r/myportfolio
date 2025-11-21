const { useEffect } = React;

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
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
            <button className="close-btn" onClick={onClose}>×</button>
          </div>

          <div className="tech-stack modal-tech-stack">
            {project.techStack.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="modal-section">
            <h3>Problem</h3>
            <p>{project.details.problem}</p>
          </div>

          <div className="modal-section">
            <h3>Solution</h3>
            <p>{project.details.solution}</p>
          </div>

          {project.details.architecture && (
            <div className="modal-section">
              <h3>Architecture</h3>
              <p>{project.details.architecture}</p>
            </div>
          )}

          {project.details.codeSnippet && (
            <div className="modal-section">
              <h3>Code Sample</h3>
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
