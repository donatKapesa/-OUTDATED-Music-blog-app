import React from 'react';
import './SearchBar.css';

const searchBar = (props) => (
    <input 
        name={props.name} 
        id={props.id} type={props.type} 
        className={props.className} 
        placeholder={props.placeholder}
        onClick={props.clicked}
        onChange={props.onChange}
        aria-label={props.ariaLabel} aria-describedby={props.ariaDescribedby}></input>
);

export default searchBar;
