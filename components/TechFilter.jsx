const TechFilter = React.memo(function TechFilter({ technologies, selectedTechs, onToggleTech }) {
  return (
    <div className="tech-filter">
      <button
        className={`filter-tag ${selectedTechs.length === 0 ? 'active' : ''}`}
        onClick={() => onToggleTech(null)}
      >
        All
      </button>
      {technologies.map(tech => (
        <button
          key={tech}
          className={`filter-tag ${selectedTechs.includes(tech) ? 'active' : ''}`}
          onClick={() => onToggleTech(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
});
