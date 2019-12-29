/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cn from 'classnames';

import { BUTTON_PROPS } from '../../../types';
import styles from './Button.module.scss';

export default function Button({ action, full, label, title, type }) {
  const buttonClass = cn('asdf', styles.genericButtonComponent, {
    [styles.full]: full,
    [styles.primary]: type === 'primary',
  });

  return (
    <div className={buttonClass} onClick={action} title={title}>
      { label }
    </div>
  );
}

Button.propTypes = BUTTON_PROPS;
Button.defaultPorps = {
  full: false,
  label: '',
  link: '',
  title: '',
  type: 'primary',
  action: () => null,
};
