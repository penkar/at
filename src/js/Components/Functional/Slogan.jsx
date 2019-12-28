import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import styles from './Slogan.module.scss';

const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();

export const Slogan = ({title="Not the Washington Post"}) => (
  <div>
    <a href='#' className={styles.text}>
      {title}
    </a>
    <div className={styles.rowText}>
      <span className={cn(styles.column, styles.left)}>
        {`${Months[date.getMonth()]} ${date.getDate()}, ${1900 + date.getYear()}`}
      </span>
      <span className={cn(styles.column, styles.center)}>
        Mold Dies in Daylight
      </span>
      <span className={cn(styles.column, styles.right)}>
        Edition: <a style={{color:'black'}} href='#'>Web</a>
      </span>
    </div>
    <hr className={styles.mediumDivider} />
  </div>
);

Slogan.propTypes = {
  title: string,
}