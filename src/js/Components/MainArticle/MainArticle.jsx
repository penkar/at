import React from 'react';
import cn from 'classnames';

import { ARTICLE } from '../../types/index.js';
import StoryElement from '../HomePage/StoryElement';
import styles from './MainArticle.module.scss';

const MainArticle = ({ className, title, author, story = [] }) => {
  const componentClass = cn(styles.teaser, className);
  return (
    <div className={styles.body}>
      <div className={componentClass}>
        { title && <div className={styles.title}>{ title }</div> }
        { author && <div className={styles.author}>{ author.join(', ') }</div> }
        { story.map((str, j) => <StoryElement {...str} key={j} />) }
      </div>
    </div>
  );
}

MainArticle.propTypes = ARTICLE;

export {MainArticle}
