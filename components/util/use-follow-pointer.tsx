import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current!;
      const xMax = el.offsetWidth;
      const yMax = el.offsetHeight;
      const xMin = 0;
      const yMin = 0;
      let x =
        clientX > xMax + el.offsetLeft
          ? xMax
          : clientX < el.offsetLeft
          ? xMin
          : clientX - el.offsetLeft - 40;
      let y =
        clientY > yMax + el.offsetTop
          ? yMax
          : clientY < el.offsetTop
          ? yMin
          : clientY - el.offsetTop - 40;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
