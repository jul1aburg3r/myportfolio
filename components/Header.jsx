const { useState, useEffect, useRef } = React;

function Header() {
  const [content, setContent] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    fetch('content/header.json')
      .then(r => r.json())
      .then(setContent);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

      // Hide header earlier - when scrolled 30% of header height
      setIsHidden(scrollY >= headerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!content) return null;

  return (
    <header ref={headerRef} className={`header ${isHidden ? 'hidden' : ''}`}>
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
