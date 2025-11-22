const { useEffect } = React;

/**
 * Custom hook to initialize Lucide icons after component renders
 * @param {Array} dependencies - Array of dependencies to trigger icon re-initialization
 */
function useInitIcons(dependencies = []) {
  useEffect(() => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      setTimeout(() => lucide.createIcons(), 0);
    }
  }, dependencies);
}
