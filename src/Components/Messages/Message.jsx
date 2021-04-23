import React from 'react';
import style from './Messages.module.css';

const Message = (props) => {
    return (
        <div className={style.Message}>
                <p>{props.name}</p>
                <p className={style.mess}>{props.message}</p>
        </div>
    );
}

export default Message;