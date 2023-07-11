import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// export const useCounter = (arg1: number, arg2: boolean) => {
export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<any>(null);

  const timeline = useRef(gsap.timeline());

  // Se asegura que este el html creado antes de ejecutar esto
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 10,
        duration: 0.2,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;
    timeline.current.play(0);
  }, [counter]);

  const handleClick = () => {
    // Esta es una forma
    // if (counter >= MAXIMUN_COUNT) {
    //   return;
    // }
    // Otra forma de validar implicito
    // siempre toma el valor mínimo, por ende, cuando el counter
    // sea 10, siempre va a tomar el MAXIMUN_COUNT
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
