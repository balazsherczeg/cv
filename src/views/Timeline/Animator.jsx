import React, { useState, useEffect } from "react";

// https://stackoverflow.com/a/54114180/9162948

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = window.setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

const Animator = ({
  children,
  className,
  delay = 250,
  isMounted,
}) => {
  const shouldRenderChild = useDelayUnmount(isMounted, delay);
  const animationClassName = isMounted ? `${className}--mounted` : `${className}--unmounted`

  return (
    <div
      className={`${className} ${animationClassName}`}
    >
      {shouldRenderChild && children}
    </div>
  );
};

export default Animator;
