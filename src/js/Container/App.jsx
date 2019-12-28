import React, { useState, useEffect, } from 'react'
import cn from 'classnames'

import { HeaderRow, TableOfContents, HomePageBody, MainArticle, } from '../Components/index.js'
import { Slogan, RecentStories, } from '../Components/Functional'
import ReactReducer from '../Reducers/reactReducer.js';
import { getStories } from '../Utility';
import styles from './App.module.scss';

export default function App () {
  const {actions, settingsReducer, newsTaglineReducer, newsStoryReducer} = ReactReducer();
  const [hash, changeHash] = useState(window.location.hash.replace(/^#/,''));

  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
    window.onhashchange = () => changeHash(window.location.hash.replace(/^#/,''));
    getStories(actions);
    // document.addEventListener('click', this._click);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let stories = [];
  if (!hash) {
    stories = newsStoryReducer;
  } else if (parseInt(hash)) {
    stories = newsStoryReducer.filter((str) => (str.id === hash));
  } else if (hash) {
    stories = newsStoryReducer.filter((str) => (str.section === hash || str.subSection === hash));
  }

  return (
    <div>
      <HeaderRow actions={actions} settings={settingsReducer} />
      <TableOfContents open={settingsReducer.tableofcontents} />
      <div className={cn(styles.appBody, {[styles.tableOfContents]: settingsReducer.tableofcontents})}>
        <Slogan />
        { !hash && RecentStories(newsTaglineReducer) }
        { stories.length > 1 && <HomePageBody stories={stories} /> }
        { stories.length === 1 && <MainArticle {...(stories[0])} /> }
      </div>
    </div>
  );
}
