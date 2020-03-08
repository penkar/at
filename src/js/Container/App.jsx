import React, { useEffect, createRef, useLayoutEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import { TableOfContents, HomePageBody } from '../Components/index';
import { PATHWAY_PROPS } from '../types';
import HeaderRow from '../Components/HeaderRow/HeaderRow';
import MainArticle from '../Components/MainArticle/MainArticle';
import { Slogan, RecentStories } from '../Components/Functional';

import NewsStoriesReducer from '../Reducers/newsStoriesReducer';
import SettingsReducer from '../Reducers/settingsReducer';

import getStories from '../Utility/Api';
import styles from './App.module.scss';

export default function App({ location: { pathname = '' } = {} }) {
  const [, section, id] = pathname.split('/');
  const applicationBody = createRef();
  const { newsStoryActions, newsTaglineReducer, newsStoryReducer } = NewsStoriesReducer();
  const { settings, settingsActions } = SettingsReducer();
  const path = window.location.pathname;

  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    if (title) title.innerText = `News of the Day ${(new Date()).toLocaleDateString()}`;
    getStories(newsStoryActions);
  }, [path]);

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

  function contentSeparator(stories, storyType, storyId) {
    switch (storyType) {
      case 'section':
        return stories.filter((str) => (storyId === str.section || storyId === str.subSection));
      case 'article':
        return stories.filter((str) => (storyId === str.id));
      default:
        return stories;
    }
  }

  const stories = contentSeparator(newsStoryReducer, section, id);
  const appBodyClass = cn(styles.appBody, { [styles.tableOfContents]: settings.tableofcontents });

  return (
    <>
      <HeaderRow actions={settingsActions} settings={settings} />
      <TableOfContents open={settings.tableofcontents} />
      <div className={appBodyClass} ref={applicationBody}>
        <Switch>
          <Route path="/article/:article">
            <Slogan />
            <MainArticle {...(stories[0])} />
          </Route>
          <Route path="/section/:section">
            <Slogan />
            <RecentStories recentStories={newsTaglineReducer} />
            <HomePageBody stories={stories} />
          </Route>
          <Route path="/">
            <Slogan />
            <RecentStories recentStories={newsTaglineReducer} />
            <HomePageBody stories={stories} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

App.propTypes = PATHWAY_PROPS;
