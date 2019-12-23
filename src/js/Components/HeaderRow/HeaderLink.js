import React from 'react';
import { HEADER_LINK } from '../../types';

export default function HeaderLink ({ title='', children=null, link='' }) {
  return (
    <li className='news-link-li'>
      <a href={link}>
        { title }
        { children }
      </a>
    </li>
  );
}

HeaderLink.prototypes = HEADER_LINK;