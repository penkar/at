import React from 'react';
import StoryElement from './StoryElement';
import cn from 'classnames';

import styles from './StoryTeaser.module.scss';

const StoryTeaser = ({story, className = '', author, title, id,}, i) => (
  <div className={cn(styles.teaser, className)} key={i}>
    { title && <a href={`#${id}`} className={styles.title}>{title}</a> }

    { author && <div className={styles.author}>{author.join(', ')}</div> }

    { story[0] && <StoryElement {...story[0]} key={0}/> }
    { story[1] && <StoryElement {...story[1]} key={1}/> }
    { story[2] && <StoryElement {...story[2]} key={2}/> }
  </div>
);

export {StoryTeaser}
