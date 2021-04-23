import React from 'react';
import style from './Dialog.module.css';

const Text = (props) => {
    return (
        <div className={style.text}>
            <h5>{props.text}</h5>
        </div>
    );
}

export default Text;