import React, {useState} from 'react';
import style from './News.module.css';

const New = (props) => {

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
        <div className={style.New}>
            <h3>{props.title}</h3>
            <p>{props.article}</p>
            <p onClick={Like} className={style.like}><i className="fas fa-heart"></i> {count}</p>
        </div>
    )
}

export default New;