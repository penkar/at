import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Slogan.module.scss';

const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();

export default function Slogan({ title }) {
  return (
    <div>
      <Link to="/" className={styles.text}>
        {title}
      </Link>
      <div className={styles.rowText}>
        <span className={cn(styles.column, styles.left)}>
          {`${Months[date.getMonth()]} ${date.getDate()}, ${1900 + date.getYear()}`}
        </span>
        <span className={cn(styles.column, styles.center)}>
          Mold Dies in Daylight
        </span>
        <span className={cn(styles.column, styles.right)}>
          Edition:&nbsp;
          <Link style={{ color: 'black' }} to="/">Web</Link>
        </span>
      </div>
      <hr className={styles.mediumDivider} />
    </div>
  );
}

Slogan.propTypes = {
  title: string,
};
Slogan.defaultProps = {
  title: 'Not the Washington Post',
};
