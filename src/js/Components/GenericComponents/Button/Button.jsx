import React from 'react';
import cn from 'classnames';

import { BUTTON_PROPS } from '../../../types';
import styles from './Button.module.scss';

const Button = ({ action, full=false, label='', link='', title='', type='primary' }) => {
  const buttonClass = cn(styles.genericButtonComponent, {
    [styles.full]: full,
    [styles.primary]: type === 'primary',
  });

  return (
    <div
      className={buttonClass}
      onClick={action}
      title={title}>
      { label }
    </div>
  );
}

Button.propTypes = BUTTON_PROPS;

export default Button;
