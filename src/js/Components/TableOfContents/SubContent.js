import React from 'react';
import { string } from 'prop-types';

import styles from './SubContent.module.scss';

export const SubContent = ({ label, link }) => (
  <div className={styles.content}>
    <a href={link}>{label}</a>
  </div>
);

SubContent.propTypes = {
  label: string,
  link: string,
}