import React from 'react'
import StoryElement from './StoryElement'
import cn from 'classnames'

const StoryTeaser = ({story, className = '', author, title, id,}, i) => (
  <div className={cn('story-teaser-component', className)} key={i}>
    { title && <a href={`#${id}`} className='title'>{title}</a> }

    { author && <div className='author'>{author.join(', ')}</div> }

    { story[0] && <StoryElement {...story[0]} key={0}/> }
    { story[1] && <StoryElement {...story[1]} key={1}/> }
    { story[2] && <StoryElement {...story[2]} key={2}/> }
  </div>
);

export {StoryTeaser}
