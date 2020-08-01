import { useLayoutEffect, useState } from 'react';

/*
  This hook returns the scroll position
*/

const useWindowScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setScroll({ x: window.scrollX, y: window.scrollY });
    }
    window.addEventListener('scroll', updateSize);
    updateSize();
    return () => window.removeEventListener('scroll', updateSize);
  }, []);
  return scroll;
};

export default useWindowScroll;
