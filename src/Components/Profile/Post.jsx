import React, { useState } from 'react';
import style from './Profile.module.css';

const Post = (props) => {
    const [count, setCount] = useState(0);

    let Like = () => {
        if (count === 0) {
            setCount(count + 1);
        }


        else {
            setCount(count - 1);
        }
        
        
    }
    return (
        <div className={style.Post}>
            <h3>Пост</h3>
            <p>{props.post}</p>
            <p onClick={Like} className={style.like}><i className="fas fa-heart"></i> {count}</p>
        </div>
    );
}

export default Post;