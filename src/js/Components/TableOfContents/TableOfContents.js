import React from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';

import Content from './Content';
import { MultiContent } from './MultiContent';
import Button from '../GenericComponents/Button/Button.js';
import { List, MultiLink, } from './SectionList.js';

import styles from './TableOfContents.module.scss'

export const TableOfContents = ({open}) => {
  const componentClass = cn(styles.tableOfContentsComponent, {[styles.open]: open, [styles.closed]: !open});

  return (
    <div id='TableOfContents' className={componentClass}>
      <Button label='Subscribe' type='primary' />
      <hr className={styles.divider} />
      <MultiContent {...MultiLink} />
      { List.map((section) => <Content {...section} key={section.label} />) }
      <hr className={styles.fullBreak} />
    </div>
  );
}

TableOfContents.propTypes = {
  open: bool,
}