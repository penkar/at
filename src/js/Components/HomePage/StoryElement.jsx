import React from 'react';
import cn from 'classnames';

import { STORY_ELEMENT } from '../../types/index';

export default function StoryElement({ type, text, array, className }) { // styles = {} removed.
  switch (type) {
    case 'title':
      return (<span className={cn('title-story-element', className)}>{text}</span>);
    case 'author':
      return (<span className={cn('author-story-element', className)}>{text}</span>);
    case 'list': {
      let listIndex = 0;
      return (
        <ul className={cn('list-story-element', className)}>
          {array.map((st) => (
            <li key={listIndex++} className="list-item-story-element">{st}</li>
          ))}
        </ul>
      );
    }
    default:
      return (<span className={cn('title-story-element', className)}>{text}</span>);
  }
}

StoryElement.propTypes = STORY_ELEMENT;
StoryElement.defaultProps = {
  className: '',
  type: '',
  text: '',
  array: [],
};
