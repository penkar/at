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

export const PARAGRAPH2 = {
  className: string,
  type: string,
  text: string,
  array: arrayOf(string),
};

export const STORY_ELEMENT = {
  className: string,
  type: string,
  text: string,
  array: arrayOf(string),
};

export const PARAGRAPH = shape({
  className: string,
  style: object,
  text: string,
  type: string,
});

export const ARTICLE = {
  author: arrayOf(string),
  className: string,
  date: any,
  id: string,
  header: string,
  section: string,
  subheader: string,
  subSection: string,
  story: arrayOf(shape(STORY_ELEMENT)),
  title: string,
};

export const ARTICLES = arrayOf(shape(ARTICLE));

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

export const RECENT_STORIES = arrayOf(HEADER_RECENT_STORY);
