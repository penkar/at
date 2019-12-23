import React from 'react';
import { string, array } from 'prop-types';
import cn from 'classnames';

import styles from './MainArticle.module.scss';

import StoryElement from '../HomePage/StoryElement';

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

MainArticle.propTypes = {
  title: string,
  author: string,
  story: array,
  className: string,
}

export {MainArticle}
