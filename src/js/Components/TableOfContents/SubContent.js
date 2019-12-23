import React from 'react';
import { string } from 'prop-types';

export const SubContent = ({ label, link }) => (
  <div className="subcontent-component">
    <a href={link}>{label}</a>
  </div>
);

SubContent.propTypes = {
  label: string,
  link: string,
}