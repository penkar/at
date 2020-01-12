import React, { useState, useEffect, createRef, useLayoutEffect } from 'react';
import cn from 'classnames';

import { TableOfContents, HomePageBody } from '../Components/index';
import HeaderRow from '../Components/HeaderRow/HeaderRow';
import MainArticle from '../Components/MainArticle/MainArticle';
import { Slogan, RecentStories } from '../Components/Functional';

import NewsStoriesReducer from '../Reducers/newsStoriesReducer';
import SettingsReducer from '../Reducers/settingsReducer';

import getStories from '../Utility/Api';
import styles from './App.module.scss';

export default function App() {
  const applicationBody = createRef();
  const { newsStoryActions, newsTaglineReducer, newsStoryReducer } = NewsStoriesReducer();
  const { settings, settingsActions } = SettingsReducer();
  const [hash, changeHash] = useState(window.location.hash.replace(/^#/, ''));

  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
    window.onhashchange = () => changeHash(window.location.hash.replace(/^#/, ''));
    getStories(newsStoryActions);
  }, []);

  const tableOfContents = settings.tableofcontents;
  useLayoutEffect(() => {
    const pageClick = ({ target }) => {
      if (tableOfContents && applicationBody.current.contains(target)) {
        settingsActions.changeSettingBool('tableofcontents');
      }
    };
    document.addEventListener('click', pageClick);
    return () => document.removeEventListener('click', pageClick);
  }, [tableOfContents, applicationBody]);

  let stories = [];
  if (!hash) {
    stories = newsStoryReducer;
  } else if (parseInt(hash, 10)) {
    stories = newsStoryReducer.filter((str) => (str.id === hash));
  } else if (hash) {
    stories = newsStoryReducer.filter((str) => (str.section === hash || str.subSection === hash));
  }
  const appBodyClass = cn(styles.appBody, { [styles.tableOfContents]: settings.tableofcontents });

  return (
    <div>
      <HeaderRow actions={settingsActions} settings={settings} />
      <TableOfContents open={settings.tableofcontents} />
      <div className={appBodyClass} ref={applicationBody}>
        <Slogan />
        { !hash && <RecentStories recentStories={newsTaglineReducer} /> }
        { stories.length > 1 ? (
          <HomePageBody stories={stories} />
        ) : (
          <MainArticle {...(stories[0])} />
        )}
      </div>
    </div>
  );
}
