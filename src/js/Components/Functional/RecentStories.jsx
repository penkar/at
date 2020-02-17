import React from 'react';
import { Link } from 'react-router-dom';

import { RECENT_STORIES } from '../../types';
import styles from './RecentStories.module.scss';

export default function RecentStories({ recentStories = [] }) {
  return (
    <ul className={styles.recentSectional}>
      <li className={styles.label} key="title">In the News&nbsp;</li>
      { recentStories.map((story) => (
        <li className={styles.recentTitle} key={story.title}>
          <Link to={`/article/${story.href}`}>{story.title}</Link>
        </li>
      )) }
    </ul>
  );
}

RecentStories.propTypes = {
  recentStories: RECENT_STORIES,
};
