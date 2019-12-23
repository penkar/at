import React from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';

import Content from './Content';
import { MultiContent } from './MultiContent';
import { Button } from '../GenericComponents';
import { List, MultiLink, } from './SectionList.js';

export const TableOfContents = (open) => {
  const componentClass = cn({open},'table-of-contents-component');
  return (
    <div id='TableOfContents' className={componentClass}>
      <Button label='Subscribe' className='content-component-button' type='primary' />
      <hr className='divider' />
      { MultiContent(MultiLink[0]) }
      { List.map((section) => (Content(section))) }
      <hr className='full-break' />
    </div>
  );
}

TableOfContents.propTypes = {
  open: bool,
}