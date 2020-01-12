import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { HEADER_LINK } from '../../types';
import styles from './HeaderLink.module.scss';

export default function HeaderLink({ className, title, children, link }) {
  const headerLinkClass = cn(styles.li, className);

  return (
    <li className={headerLinkClass}>
      <Link to={`/section/${link}`}>
        { title }
        { children }
      </Link>
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
