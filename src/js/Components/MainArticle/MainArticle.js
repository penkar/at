import React from 'react';
import { string, array } from 'prop-types';
import StoryElement from '../HomePage/StoryElement';
import cn from 'classnames';

const MainArticle = ({ className, title, author, story = [] }) => {
  const componentClass = cn('story-teaser-component', 'main-article-component', className);
  return (
    <div className='home-page-body'>
      <div className={componentClass}>
        { title && <div className='title'>{ title }</div> }
        { author && <div className='author'>{ author.join(', ') }</div> }

        { story.map((str, j) => <StoryElement {...str} key={j} />) }
      </div>
    </div>
  );
}

MainArticle.propTypes = {
  title: string,
  author: string,
  story: array,
  className: string,
}

export {MainArticle}
