import React from 'react';
import {StoryTeaser} from './StoryTeaser';

const HomePageBody = (stories) => {
  const arr1 = [], arr2 = [], arr3 = [];
  let arr1Sum = 0, arr2Sum = 0, arr3Sum = 0;
  stories.forEach((item, i) => {
    if(arr1Sum <= arr2Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr1Sum += (tease.text || "").length;
      });
      arr1.push(StoryTeaser(item, i));
    } else if(arr2Sum <= arr3Sum) {
      item.story.slice(0,3).forEach((tease) => {
        arr2Sum += (tease.text || "").length;
      });
      arr2.push(StoryTeaser(item, i));
    } else {
      item.story.slice(0,3).forEach((tease) => {
        arr3Sum += (tease.text || "").length;
      });
      arr3.push(StoryTeaser(item, i));
    }
  });
  const bodyClass = 'home-page-body';
  const colClass = 'home-page-body-col';

  return (
    <div className={bodyClass}>
      <div className={colClass}>
        {arr1}
      </div>
      <div className={colClass}>
        {arr2}
      </div>
      <div className={colClass}>
        {arr3}
      </div>
    </div>
  );
}

export {HomePageBody}
