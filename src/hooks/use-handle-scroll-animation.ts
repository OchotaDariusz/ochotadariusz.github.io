import React, { useEffect, useRef } from 'react';

export const useHandleScrollAnimation = (): React.RefObject<HTMLElement> => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    const elementInView = (el: HTMLElement, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutOfView = (el: HTMLElement) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (el: HTMLElement) => {
      el.classList.add('scrolled');
    };

    const hideScrollElement = (el: HTMLElement) => {
      el.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
      if (element && elementInView(element, 1)) {
        displayScrollElement(element);
      } else if (element && elementOutOfView(element)) {
        hideScrollElement(element);
      }
    };

    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollAnimation();
      });
    };
  }, [sectionRef]);

  return sectionRef;
};
