const { useState, useEffect, useMemo, useCallback } = React;

function ProjectGrid() {
  const { data: projects, loading, error } = useFetch('projects.json');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [fadingOut, setFadingOut] = useState(new Set());

  // Initialize displayed projects when data loads
  useEffect(() => {
    if (projects) {
      setDisplayedProjects(projects);
    }
  }, [projects]);

  // Initialize icons when projects or modal changes
  useInitIcons([displayedProjects, selectedProject]);

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    if (!projects) return [];
    const techSet = new Set();
    projects.forEach(project => {
      project.techStack.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
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
  }, [filteredProjects, displayedProjects]);

  const handleToggleTech = useCallback((tech) => {
    if (tech === null) {
      setSelectedTechs([]);
    } else {
      setSelectedTechs(prev =>
        prev.includes(tech)
          ? prev.filter(t => t !== tech)
          : [...prev, tech]
      );
    }
  }, []);

  if (loading) return null;
  if (error) return null;

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
              onToggleTech={handleToggleTech}
              selectedTechs={selectedTechs}
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
