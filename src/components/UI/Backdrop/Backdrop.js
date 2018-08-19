import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    // console.log(props.showModal);
    return(
        props.showModal ? <div className={props.backdropStyles} onClick={props.clicked}></div> : null
    );
}

export default backdrop;