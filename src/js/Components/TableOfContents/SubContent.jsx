import React from 'react';
import { string } from 'prop-types';

import styles from './SubContent.module.scss';

export default function SubContent ({ label, link }) {
  return (
    <a className={styles.content} href={link}>{label}</a>
  );
}

SubContent.propTypes = {
  label: string.isRequired,
  link: string.isRequired,
};
