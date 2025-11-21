const { useState, useEffect, useMemo } = React;

function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [fadingOut, setFadingOut] = useState(new Set());

  useEffect(() => {
    fetch('projects.json')
      .then(r => r.json())
      .then(data => {
        setProjects(data);
        setDisplayedProjects(data);
        setTimeout(() => lucide.createIcons(), 0);
      });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => lucide.createIcons(), 0);
    }
  }, [selectedProject]);

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.techStack.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return projects;
    return projects.filter(project =>
      selectedTechs.some(tech => project.techStack.includes(tech))
    );
  }, [projects, selectedTechs]);

  // Handle filtering with fade out animation
  useEffect(() => {
    const projectsToRemove = displayedProjects.filter(
      p => !filteredProjects.includes(p)
    );

    if (projectsToRemove.length > 0) {
      // Start fade out
      setFadingOut(new Set(projectsToRemove.map(p => p.id)));

      // After animation, remove from display
      setTimeout(() => {
        setDisplayedProjects(filteredProjects);
        setFadingOut(new Set());
      }, 300);
    } else {
      setDisplayedProjects(filteredProjects);
    }
  }, [filteredProjects]);

  const handleToggleTech = (tech) => {
    if (tech === null) {
      setSelectedTechs([]);
    } else {
      setSelectedTechs(prev =>
        prev.includes(tech)
          ? prev.filter(t => t !== tech)
          : [...prev, tech]
      );
    }
  };

  return (
    <>
      <TechFilter
        technologies={allTechnologies}
        selectedTechs={selectedTechs}
        onToggleTech={handleToggleTech}
      />
      <main className="grid">
        {displayedProjects.map(project => (
          <div
            key={project.id}
            className={`card-wrapper ${fadingOut.has(project.id) ? 'fading-out' : ''}`}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
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
