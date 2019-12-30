import {
  any,
  array,
  arrayOf,
  bool,
  func,
  string,
  node,
  object,
  shape,
} from 'prop-types';

export const PARAGRAPH = shape({
  className: string,
  style: object,
  text: string,
  type: string,
});

export const ARTICLE = shape({
  id: string,
  date: any,
  section: string,
  subSection: string,
  title: string,
  author: arrayOf(string),
  header: string,
  subheader: string,
  story: arrayOf(PARAGRAPH),
});

export const ARTICLES = arrayOf(ARTICLE);

export const BUTTON_PROPS = {
  action: func,
  className: string,
  full: bool,
  label: string,
  link: string,
  title: string,
  type: string,
};

export const CONTENT = {
  label: string,
  link: string,
  sublinks: array,
  className: string,
};

export const HEADER_BUTTON_PROPS = {
  title: string,
  link: string,
  className: string,
  clickValue: string,
  onClick: func,
};

export const HEADER_LINK = {
  href: string,
  title: string,
  children: node,
};

export const HEADER_RECENT_STORY = shape({
  title: string,
  href: string,
});

export const RECENT_STORIES = {
  recentStories: arrayOf(HEADER_RECENT_STORY),
};
