import React from 'react';
import cn from 'classnames';

import { ARTICLE } from '../../types/index';
import StoryElement from '../HomePage/StoryElement';
import styles from './MainArticle.module.scss';

export default function MainArticle({ className = '', title = '', author = [], story = [] }) {
  const componentClass = cn(styles.teaser, className);
  let subListIndex = 0;

  return (
    <div className={styles.body} data-iden="main-article">
      <div className={componentClass}>
        { title && <div className={styles.title}>{ title }</div> }
        { author && <div className={styles.author}>{ author.join(', ') }</div> }
        { story.map((str) => <StoryElement {...str} key={subListIndex++} />) }
      </div>
    </div>
  );
}

MainArticle.propTypes = ARTICLE;
