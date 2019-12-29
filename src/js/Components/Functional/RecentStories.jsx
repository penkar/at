import React from 'react';

import { RECENT_STORIES } from '../../types';
import styles from './RecentStories.module.scss';

export default function RecentStories(array = []) {
  return (
    <ul className={styles.recentSectional}>
      <li className={styles.label} key="title">In the News&nbsp;</li>
      { array.map((story) => (
        <li className={styles.recentTitle} key={story.title}>
          <a href={`#${story.href || ''}`}>{story.title}</a>
        </li>
      )) }
    </ul>
  );
}

RecentStories.propTypes = RECENT_STORIES;
