import React from 'react';
import './index.scss';
import logo from '../../../loader.svg';

const Loader = () => (
  <div id="loader-container">
    <img src={logo} alt="logo" />
  </div>
);

export default Loader;
