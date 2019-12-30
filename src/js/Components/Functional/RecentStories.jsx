import React from 'react';

import { RECENT_STORIES } from '../../types';
import styles from './RecentStories.module.scss';

export default function RecentStories({ recentStories }) {
  return (
    <ul className={styles.recentSectional}>
      <li className={styles.label} key="title">In the News&nbsp;</li>
      { recentStories.map((story) => (
        <li className={styles.recentTitle} key={story.title}>
          <a href={`#${story.href || ''}`}>{story.title}</a>
        </li>
      )) }
    </ul>
  );
}

RecentStories.propTypes = {
  recentStories: RECENT_STORIES,
};
RecentStories.defaultProps = {
  recentStories: [],
};
