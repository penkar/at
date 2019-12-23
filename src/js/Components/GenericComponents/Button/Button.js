import React from 'react';
import { BUTTON_PROPS } from '../../../types';
import styles from './Button.module.scss';
import cn from 'classnames';

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

export {Button};
