import React from 'react';
import { RECENT_STORIES } from '../../types';

const RecentStories = (array = []) => (
  <ul className='recent-sectional'>
    <li className='label' key='title'>In the News&nbsp;</li>
    { array.map((story, i) => (
      <li className='recent-sectional-title' key={i}>
        <a href={`#${story.href || ''}`}>{story.title}</a>
      </li>
    )) }
  </ul>
);

RecentStories.propTypes = RECENT_STORIES;
export {RecentStories};
