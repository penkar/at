import React from 'react';
import cn from 'classnames';

import { HEADER_BUTTON_PROPS } from '../../types';
import styles from './HeaderButton.module.scss';

const HeaderButton = ({
  clickValue,
  className,
  search,
  onClick,
  children,
  title,
}) => {
  const onButtonClick = () => onClick(clickValue);
  const componentClass = cn(styles.newsButton, { [styles.search]: search });

  return (
    <div onClick={onButtonClick} className={cn(componentClass, className)}>
      { title }
      { children }
    </div>
  );
};

HeaderButton.propTypes = HEADER_BUTTON_PROPS;
HeaderButton.defaultProps = {
  onClick: () => null,
  children: null,
  title: '',
  search: false,
};

export default HeaderButton;
