import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import StoryElement from './StoryElement';
import { ARTICLE } from '../../types/index';
import styles from './StoryTeaser.module.scss';

export default function StoryTeaser({ story = [], className = '', author = [], title = '', id = '' }) {
  return (
    <div className={cn(styles.teaser, className)} data-testid="teaser-article">
      { title && <Link to={`/article/${id}`} className={styles.title}>{title}</Link> }
      { author && <div className={styles.author}>{author.join(', ')}</div> }
      { story[0] && <StoryElement {...story[0]} /> }
      { story[1] && <StoryElement {...story[1]} /> }
      { story[2] && <StoryElement {...story[2]} /> }
    </div>
  );
}

StoryTeaser.propTypes = ARTICLE;
export { StoryTeaser };
