import React from 'react';
import { RECENT_STORIES } from '../../types';

import styles from './RecentStories.module.scss';

const RecentStories = (array = []) => (
  <ul className={styles.recentSectional}>
    <li className={styles.label} key='title'>In the News&nbsp;</li>
    { array.map((story, i) => (
      <li className={styles.recentTitle} key={i}>
        <a href={`#${story.href || ''}`}>{story.title}</a>
      </li>
    )) }
  </ul>
);

RecentStories.propTypes = RECENT_STORIES;
export {RecentStories};
