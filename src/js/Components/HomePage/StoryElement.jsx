import React from 'react';
import cn from 'classnames';
import styles from './StoryElement.module.scss';

import { STORY_ELEMENT } from '../../types/index';

export default function StoryElement({ type, text, array, className }) {
  switch (type) {
    case 'title':
      return (<span className={cn(styles.titleStoryElement, className)}>{text}</span>);
    case 'author':
      return (<span className={cn(styles.authorStoryElement, className)}>{text}</span>);
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
StoryElement.defaultProps = {
  className: '',
  type: '',
  text: '',
  array: [],
};
