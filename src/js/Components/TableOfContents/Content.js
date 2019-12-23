import React from 'react';
import { string, array } from 'prop-types';
import cn from 'classnames';

import styles from './Content.module.scss';

import {SubContent} from './SubContent';
import {FaAngleRight} from 'react-icons/fa'

export default function Content ({ className, sublinks, link, label, key }) {
  const componentClass = cn(styles.content, className);
  return (
    <div className={componentClass} key={key}>
      <span className={styles.label}>
        {label}
      </span>
      <span className={styles.rightArrow}>
        { Boolean(sublinks.length) && <FaAngleRight style={{fontSize: '1.5em'}}/> }
      </span>
      { Boolean(sublinks.length) &&
        <div className={cn(styles.subContent, styles.thinShadow)}>
          { sublinks.map((sub) => <SubContent {...sub} />) }
        </div>
      }
    </div>
  );
}

Content.propTypes = {
  key: string,
  label: string,
  link: string,
  sublinks: array,
  className: string,
}