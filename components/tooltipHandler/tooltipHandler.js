import React from 'react';
import styles from './tooltipHandler.module.css';
import useToggle from '../../utils/useToggle';
import data from '../../utils/data.json';
import classNames from 'classnames';


export default function TooltipHandler({ children, index }) {
  const [isOpen, eventHandler, ref] = useToggle(false);
  return (
    <>
      <div 
        className={styles.container} 
        onMouseEnter={() => eventHandler(isOpen)}
        onMouseLeave={() => eventHandler(!isOpen)}
        onFocus={() => eventHandler(isOpen)}
        onBlur={() => eventHandler(!isOpen)}
      >
          {children}
          <div ref={ref} className={classNames(styles.tooltip, { [styles.isClosed]: !isOpen })}>
            {data.experience[index].stack}
          </div>
      </div>
    </>
  );
}
