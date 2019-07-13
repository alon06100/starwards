import React from 'react';
import './index.scss';

const SearchInput = ({ handleChange, filter, placeholder }) => (
  <div className="search-input-group">
    <i className="fas fa-search"></i>
    <input value={filter} onChange={(e) => { handleChange(e) }} className="search-input no-focus" placeholder={placeholder}></input>
  </div>
)

export default SearchInput;
