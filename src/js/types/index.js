import {
  arrayOf,
  bool,
  func,
  shape,
  string,
  node,
} from 'prop-types';

export const BUTTON_PROPS = {
  action: func,
  className: string,
  full: bool,
  label: string,
  link: string,
  title: string,
  type: string,
}

export const HEADER_BUTTON_PROPS = {
  title: string,
  link: string,
  className: string,
  clickValue: string,
  onClick: func,
}

export const HEADER_LINK = {
  href: string.isRequired,
  title: string.isRequired,
  children: node,
}

export const HEADER_RECENT_STORY = shape({
  title: string,
  href: string,
});

export const RECENT_STORIES = arrayOf(HEADER_RECENT_STORY);
