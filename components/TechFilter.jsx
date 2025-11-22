/**
 * Technology filter component for filtering projects by tech stack
 * @param {Array} technologies - Array of all available technologies
 * @param {Array} selectedTechs - Array of currently selected technologies
 * @param {Function} onToggleTech - Callback to toggle a technology filter
 */
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

TechFilter.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTechs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleTech: PropTypes.func.isRequired,
};
