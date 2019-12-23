import React from 'react';
import { HEADER_LINK } from '../../types';

import styles from './HeaderLink.module.scss';

export default function HeaderLink ({ className='', title='', children=null, link='' }) {
  return (
    <li className={styles.li}>
      <a href={link}>
        { title }
        { children }
      </a>
    </li>
  );
}

HeaderLink.prototypes = HEADER_LINK;