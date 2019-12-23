import React from 'react';
import { shape, string, array } from 'prop-types';
import cn from 'classnames';

export const MultiContent = ({primary = {label:'',key:'',link:''}, secondary = [], className = ''}) => {
  const componentClass = cn('multicontent-component content-component', className);
  return (
    <div className={componentClass}>
      <a className={'primary'} href={primary.link}>
        { primary.label }
      </a>
      { secondary.map((item) => (
        <a className={'secondary'} href={item.link} key={item.key}>{item.label}</a>
      )) }
    </div>
  )
};

MultiContent.propTypes = {
  className: string,
  primary: shape({
    label: string,
    key: string,
    link: string,
  }),
  secondary: array,
};