import React from 'react';
import cn from 'classnames';

import StoryElement from './StoryElement';
import { ARTICLE } from '../../types/index.js';

import styles from './StoryTeaser.module.scss';

const StoryTeaser = ({story, className = '', author, title, id }) => (
  <div className={cn(styles.teaser, className)}>
    { title && <a href={`#${id}`} className={styles.title}>{title}</a> }
    { author && <div className={styles.author}>{author.join(', ')}</div> }
    { story[0] && <StoryElement {...story[0]} /> }
    { story[1] && <StoryElement {...story[1]} /> }
    { story[2] && <StoryElement {...story[2]} /> }
  </div>
);

StoryTeaser.propTypes = {...ARTICLE};

export {StoryTeaser}
