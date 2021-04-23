import React from 'react';
import style from './Friends.module.css';

const Friend = (props) => {
    return (
        <div className={style.Friend}>
            <img src="https://i.ya-webdesign.com/images/vector-avatars-male-female-16.png" alt="friend"/>
            <p>{props.name}</p>
            <p>{props.lastname}</p>
            <p>{props.age}</p>
        </div>
    );
}

export default Friend;