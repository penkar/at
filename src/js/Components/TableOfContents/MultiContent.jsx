/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { MULTI_CONTENT_PROPS } from '../../types/index';
import styles from './MultiContent.module.scss';

export default function MultiContent({ primary, secondary, className }) {
  const componentClass = cn(styles.multiContent, styles.contentComponent, className);

  return (
    <div className={componentClass}>
      <Link className={styles.primary} to={`/section/${primary.link}`}>
        { primary.label }
      </Link>
      { secondary.map((item) => (
        <Link className={styles.secondary} to={`/section/${item.link}`} key={item.key}>{item.label}</Link>
      )) }
    </div>
  );
}

MultiContent.propTypes = MULTI_CONTENT_PROPS;
MultiContent.defaultProps = {
  className: '',
  primary: {
    label: '',
    key: '',
    link: '',
  },
  secondary: [],
};
