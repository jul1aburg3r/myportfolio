const { useState, useEffect } = React;

function Header() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('content/header.json')
      .then(r => r.json())
      .then(setContent);
  }, []);

  if (!content) return null;

  return (
    <header className="header">
      <div className="header-shape header-shape-1"></div>
      <div className="header-shape header-shape-2"></div>
      <div className="header-shape header-shape-3"></div>
      <div className="header-content">
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>
    </header>
  );
}
