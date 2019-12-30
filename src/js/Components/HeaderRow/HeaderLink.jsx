import React from 'react';
import cn from 'classnames';

import { HEADER_LINK } from '../../types';
import styles from './HeaderLink.module.scss';

export default function HeaderLink({ className, title, children, link }) {
  const headerLinkClass = cn(styles.li, className);

  return (
    <li className={headerLinkClass}>
      <a href={link}>
        { title }
        { children }
      </a>
    </li>
  );
}

HeaderLink.propTypes = HEADER_LINK;
HeaderLink.defaultProps = {
  className: '',
  title: '',
  children: null,
  link: '',
};
