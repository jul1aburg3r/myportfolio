const { useState, useEffect } = React;

function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('projects.json')
      .then(r => r.json())
      .then(data => {
        setProjects(data);
        setTimeout(() => lucide.createIcons(), 0);
      });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => lucide.createIcons(), 0);
    }
  }, [selectedProject]);

  return (
    <>
      <main className="grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </main>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
