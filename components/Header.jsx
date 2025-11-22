const { useState, useEffect, useRef, useCallback } = React;

function Header() {
  const { data: content, loading, error } = useFetch('content/header.json');
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

    // Hide header earlier - when scrolled 30% of header height
    setIsHidden(scrollY >= headerHeight * 0.3);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (loading) return null;
  if (error) return null;

  return (
    <header ref={headerRef} className={`header ${isHidden ? 'hidden' : ''}`}>
      <div className="header-shape header-shape-1"></div>
      <div className="header-shape header-shape-2"></div>
      <div className="header-shape header-shape-3"></div>
      <div className="header-content">
        <h1>{content.title}</h1>
        <p>
          {content.subtitle.before}
          <span className="highlight">{content.subtitle.highlight}</span>
          {content.subtitle.after}
        </p>
      </div>
    </header>
  );
}
