import React from 'react';
import './index.scss';

const View = ({ children }) => (
  <div id="main-page-container">
    <div id="main-page-wrapper">
      {children}
    </div>
  </div>
);

export default View;
