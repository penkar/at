import React from 'react';
import cn from 'classnames';
import { HEADER_BUTTON_PROPS } from '../../types';

export default function HeaderButton ({ clickValue, className='', onClick = ()=>null, children = null, title = '' }) {
  const onButtonClick = () => onClick(clickValue);
  const componentClass = cn('news-button', className);

  return (
    <div onClick={onButtonClick} className={componentClass}>
      { title }
      { children }
    </div>
  );
}

HeaderButton.propTypes = HEADER_BUTTON_PROPS