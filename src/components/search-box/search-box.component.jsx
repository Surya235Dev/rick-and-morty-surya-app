import React from 'react';
import './search-box.styles.css'
export const SearchBox = ({placeholder, handleChange}) => (
    <nav className="navbar navbar-light bg-light justify-content-between">
  <div className='brand'>Surya G</div>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder={placeholder} onChange={handleChange} aria-label="Search"/>
 </form>
</nav>


)