/**
 * Main App component - Root component of the portfolio application
 */
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <ProjectGrid />
      <Footer />
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
