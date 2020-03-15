import React from 'react';
import cn from 'classnames';
import styles from './StoryElement.module.scss';

import { STORY_ELEMENT } from '../../types/index';

export default function StoryElement({ type = '', text = '', array = [], className = '' }) {
  switch (type) {
    case 'title':
    case 'author': {
      const classNames = cn(className, {
        [styles.titleStoryElement]: type === 'title',
        [styles.authorStoryElement]: type === 'author',
      });
      return <span className={classNames}>{text}</span>;
    }
    case 'list': {
      let listIndex = 0;
      return (
        <ul className={cn(styles.listStoryElement, className)}>
          {array.map((story) => (
            <li key={listIndex++} className={styles.listItemStoryElement}>{story}</li>
          ))}
        </ul>
      );
    }
    default:
      return (<span className={cn(styles.titleStoryElement, className)}>{text}</span>);
  }
}

StoryElement.propTypes = STORY_ELEMENT;
