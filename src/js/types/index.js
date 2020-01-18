import {
  any,
  array,
  arrayOf,
  bool,
  func,
  node,
  object,
  shape,
  string,
} from 'prop-types';

export const STORY_ELEMENT = {
  array: arrayOf(string),
  className: string,
  text: string,
  type: string,
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
  header: string,
  id: string,
  section: string,
  story: arrayOf(shape(STORY_ELEMENT)),
  subheader: string,
  subSection: string,
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
  className: string,
  label: string,
  link: string,
  sublinks: array,
};

export const HEADER_BUTTON_PROPS = {
  changeSearch: func,
  className: string,
  clickValue: string,
  link: string,
  onClick: func,
  title: string,
};

export const HEADER_LINK = {
  children: node,
  href: string,
  title: string,
};

export const HEADER_RECENT_STORY = shape({
  href: string,
  title: string,
});

export const HEADER_ROW_PROPS = shape({
  actions: shape({
    [string]: func,
  }).isRequired,
  settings: shape({
    [string]: object,
  }).isRequired,
});

export const RECENT_STORIES = arrayOf(HEADER_RECENT_STORY);

export const MULTI_CONTENT_PROPS = {
  className: string,
  primary: shape({
    label: string,
    key: string,
    link: string,
  }),
  secondary: array,
};

export const PATHWAY_PROPS = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};
