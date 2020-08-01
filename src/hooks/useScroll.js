import { useRef } from 'react';

const useScroll = () => {
  const htmlElRef = useRef(null);
  const executeScroll = () =>
    window.scroll({
      top: htmlElRef.current.offsetTop - 130,
      block: 'start',
      left: 0,
      behavior: 'smooth'
    });

  return [executeScroll, htmlElRef];
};
export default useScroll;
