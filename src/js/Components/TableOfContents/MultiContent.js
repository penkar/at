import React from 'react';
import { shape, string, array } from 'prop-types';
import cn from 'classnames';

import styles from './MultiContent.module.scss';

export const MultiContent = ({primary = {label:'',key:'',link:''}, secondary = [], className = ''}) => {
  const componentClass = cn(styles.multiContent, styles.contentComponent, className);
  return (
    <div className={componentClass}>
      <a className={styles.primary} href={primary.link}>
        { primary.label }
      </a>
      { secondary.map((item) => (
        <a className={styles.styles} href={item.link} key={item.key}>{item.label}</a>
      )) }
    </div>
  )
};

MultiContent.propTypes = {
  className: string,
  primary: shape({
    label: string,
    key: string,
    link: string,
  }),
  secondary: array,
};