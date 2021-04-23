import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend';

const Friends = (props) => {

    let MapingFriend = props.state.friends.map(f => <Friend name={f.name} lastname={f.lastname} age={f.age}/>);
    return (
        <div>
            <h1>Друзья</h1>
            <div className={style.divbar}>
                    
                    {MapingFriend}

            </div>
        </div>
    );
}

export default Friends;