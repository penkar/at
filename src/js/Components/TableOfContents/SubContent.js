import React from 'react';
import { string } from 'prop-types';

import styles from './SubContent.module.scss';

export const SubContent = ({ label, link }) => <a className={styles.content} href={link}>{label}</a>;

SubContent.propTypes = {
  label: string,
  link: string,
}