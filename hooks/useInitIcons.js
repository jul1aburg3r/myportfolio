const { useEffect } = React;

function useInitIcons(dependencies = []) {
  useEffect(() => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      setTimeout(() => lucide.createIcons(), 0);
    }
  }, dependencies);
}
