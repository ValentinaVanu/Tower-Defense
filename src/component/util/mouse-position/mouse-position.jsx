import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("click", setFromEvent);
    // 'click'/'mousemove'

    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  return mousePosition;
};

export { useMousePosition };