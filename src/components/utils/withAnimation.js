import React, { useRef, useEffect, useState } from 'react';

const withAnimation = (Component, animationClass) => {
  return (props) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref} className={isVisible ? animationClass : ''}>
        <Component {...props} />
      </div>
    );
  };
};

export default withAnimation;
