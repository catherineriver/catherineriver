import {
  useCallback, useRef, useState,
} from 'react';

const useToggle = (isOpen) => {
    const [toggledState, setToggledState] = useState(isOpen || false);
  

  const eventHandler = useCallback(() => {
    setToggledState(!toggledState);
  }, [toggledState]);

  const ref = useRef();

  return [toggledState, eventHandler, ref];
};

export default useToggle;
