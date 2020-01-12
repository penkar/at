import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import styles from './SubContent.module.scss';

export default function SubContent({ label, link }) {
  return <Link className={styles.content} to={`/section/${link}`}>{label}</Link>;
}

SubContent.propTypes = {
  label: string,
  link: string,
};
SubContent.defaultProps = {
  label: '',
  link: '',
};
