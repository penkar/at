import React from 'react';
import cn from 'classnames';

import { StoryTeaser } from './StoryTeaser';
import { ARTICLES } from '../../types/index';
import styles from './HomePageBody.module.scss';

export default function HomePageBody({ stories }) {
  const arr1 = [], arr2 = [], arr3 = [];
  let arr1Sum = 0, arr2Sum = 0, arr3Sum = 0;
  let storyIndex = 0;

  stories.forEach((item) => {
    if (arr1Sum <= arr2Sum) {
      item.story.slice(0, 3).forEach((tease) => {
        arr1Sum += (tease.text || '').length;
      });
      arr1.push(<StoryTeaser {...item} key={storyIndex++} />);
    } else if (arr2Sum <= arr3Sum) {
      item.story.slice(0, 3).forEach((tease) => {
        arr2Sum += (tease.text || '').length;
      });
      arr2.push(<StoryTeaser {...item} key={storyIndex++} />);
    } else {
      item.story.slice(0, 3).forEach((tease) => {
        arr3Sum += (tease.text || '').length;
      });
      arr3.push(<StoryTeaser {...item} key={storyIndex++} />);
    }
  });
  const bodyClass = styles.homePageBody;
  const colClass = styles.homePageBodyCol;

  return (
    <div className={bodyClass}>
      <div className={cn(colClass, styles.borderRight)}>{arr1}</div>
      <div className={cn(colClass, styles.borderRight)}>{arr2}</div>
      <div className={colClass}>{arr3}</div>
    </div>
  );
}

HomePageBody.propTypes = {
  stories: ARTICLES,
};
HomePageBody.defaultProps = {
  stories: [],
};
