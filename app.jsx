const { useState, useEffect } = React;

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('projects.json')
      .then(r => r.json())
      .then(setProjects);
  }, []);

  return (
    <>
      <Header />
      <main className="grid">
        {projects.map(project => (
          <Card
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </main>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-shape header-shape-1"></div>
      <div className="header-shape header-shape-2"></div>
      <div className="header-shape header-shape-3"></div>
      <div className="header-content">
        <h1>Automation Portfolio</h1>
        <p>Tools I built to eliminate busywork</p>
      </div>
    </header>
  );
}

function Card({ project, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {project.icon && <div className="card-icon">{project.icon}</div>}
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
        <span className="see-details">See details →</span>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
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
              {project.icon && <div className="modal-icon">{project.icon}</div>}
              <h2>{project.name}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>

          <div className="tech-stack" style={{marginBottom: '1.5rem'}}>
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

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
      <span>·</span>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">LinkedIn</a>
      <span>·</span>
      <a href="mailto:your@email.com">Email</a>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
