import React from 'react'
import cn from 'classnames'

const StoryElement = ({style, type, text, array, className = ''}) => {
  switch (type) {
    case 'title':
      return <span className={cn('title-story-element', className)}>{text}</span>
    case 'author':
      return <span className={cn('author-story-element', className)}>{text}</span>
    case 'list':
      return (
        <ul className={cn('list-story-element', className)}>
          {array.map((st, j)=>(<li key={j} className='list-item-story-element'>{st}</li>))}
        </ul>
      );
    default:
      return <span className={cn('title-story-element', className)}>{text}</span>
  }
}

export default StoryElement
