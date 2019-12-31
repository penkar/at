import React from 'react';
import { FaSearch } from 'react-icons/fa';
import cn from 'classnames';

import { HEADER_BUTTON_PROPS } from '../../types';
import styles from './TransitionHeaderButton.module.scss';

export default function TransitionHeaderButton({
  changeSearch,
  clickValue,
  className,
  onClick,
  search,
}) {
  const onButtonClick = () => onClick(clickValue);
  const componentClass = cn(styles.newsButton, className, { [styles.search]: search });
  const changeSearchText = (event) => changeSearch({ setting: { searchString: event.target.value } });

  return (
    <div className={componentClass}>
      <FaSearch
        role="button"
        tabIndex="0"
        onKeyDown={onButtonClick}
        onClick={onButtonClick}
        className={styles.standardIcon}
      />
      <input className={styles.inputField} onChange={changeSearchText} />
    </div>
  );
}

TransitionHeaderButton.propTypes = HEADER_BUTTON_PROPS;
TransitionHeaderButton.defaultProps = {};
