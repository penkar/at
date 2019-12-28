import React from 'react';
import cn from 'classnames';

import { HEADER_BUTTON_PROPS } from '../../types';

import styles from './HeaderButton.module.scss';

const HeaderButton = ({
  clickValue,
  className,
  search = false,
  onClick = ()=>null,
  children = null,
  title = ''
}) => {
  const onButtonClick = () => onClick(clickValue);
  const componentClass = cn(styles.newsButton, {[styles.search]: search});

  return (
    <div onClick={onButtonClick} className={cn(componentClass, className)}>
      { title }
      { children }
    </div>
  );
}

export default HeaderButton;

HeaderButton.propTypes = HEADER_BUTTON_PROPS