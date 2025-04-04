import { useEffect, useState } from 'react';

const useAllImagesVisible = (): boolean => {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const total = imgs.length;
    let loaded = 0;

    if (total === 0) {
      setAllLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loaded += 1;
      if (loaded === total) {
        requestAnimationFrame(() => {
          setAllLoaded(true);
        });
      }
    };

    imgs.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad);
      }
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  return allLoaded;
};

export default useAllImagesVisible;
