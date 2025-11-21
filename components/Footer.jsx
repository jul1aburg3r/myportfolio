const { useState, useEffect } = React;

function Footer() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('content/footer.json')
      .then(r => r.json())
      .then(setContent);
  }, []);

  if (!content) return null;

  return (
    <footer className="footer">
      <div className="footer-shape footer-shape-1"></div>
      <div className="footer-shape footer-shape-2"></div>
      <div className="footer-shape footer-shape-3"></div>
      <div className="footer-shape footer-shape-4"></div>
      {content.links.map((link, index) => (
        <React.Fragment key={link.label}>
          {index > 0 && <span>·</span>}
          <a href={link.url} target="_blank" rel="noopener">{link.label}</a>
        </React.Fragment>
      ))}
    </footer>
  );
}
