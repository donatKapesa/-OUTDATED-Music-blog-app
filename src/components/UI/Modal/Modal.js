import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import './Modal.css';

const Modal = (props) => (
    <Aux>
        <Backdrop
            backdropStyles={props.backdropStyles}
            showModal={props.showModal}
            clicked={props.modalClosed} />
        <div 
            className={props.styles}
            style = {{
                transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showModal ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;