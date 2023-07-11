import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;
    console.log(
      "%cSe llego al valor máximo",
      "color: red; background-color: black;"
    );

    const timeline = gsap.timeline();

    timeline.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });
    timeline.to(counterElement.current, {
      y: 10,
      duration: 0.2,
      ease: "bounce.out",
    });
  }, [counter]);

  const handleClick = () => {
    // Esta es una forma
    // if (counter >= MAXIMUN_COUNT) {
    //   return;
    // }
    // Otra forma de validar implicito
    // siempre toma el valor mínimo, por ende, cuando el counter
    // sea 10, siempre va a tomar el MAXIMUN_COUNT
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
