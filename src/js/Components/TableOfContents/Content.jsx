/* eslint-disable operator-linebreak */
import React from 'react';
import cn from 'classnames';
import { FaAngleRight } from 'react-icons/fa';

import SubContent from './SubContent';
import { CONTENT } from '../../types/index';
import styles from './Content.module.scss';

export default function Content({ className, sublinks, label }) {
  const componentClass = cn(styles.content, className);
  const sublinkClass = cn(styles.subContent, styles.thinShadow);
  let subLinkIndex = 0;

  return (
    <div className={componentClass}>
      <span className={styles.label}>{label}</span>
      <span className={styles.rightArrow}>
        { Boolean(sublinks.length) && <FaAngleRight style={{ fontSize: '1.5em' }} /> }
      </span>
      { Boolean(sublinks.length) && (
        <div className={sublinkClass}>
          { sublinks.map((sub) => <SubContent {...sub} key={subLinkIndex++} />) }
        </div>
      )}
    </div>
  );
}

Content.propTypes = CONTENT;
