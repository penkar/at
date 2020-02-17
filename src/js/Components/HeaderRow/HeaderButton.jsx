import React from 'react';
import cn from 'classnames';

import { HEADER_BUTTON_PROPS } from '../../types';
import styles from './HeaderButton.module.scss';

export default function HeaderButton({
  clickValue,
  className = false,
  search = false,
  onClick = () => null,
  children = null,
  title = '',
}) {
  const onButtonClick = () => onClick(clickValue);
  const componentClass = cn(styles.newsButton, className, { [styles.search]: search });

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={onButtonClick}
      onClick={onButtonClick}
      className={componentClass}
    >
      { title }
      { children }
    </div>
  );
}

HeaderButton.propTypes = HEADER_BUTTON_PROPS;
