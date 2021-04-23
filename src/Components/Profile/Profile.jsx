import React from 'react';
import Post from './Post';
import style from './Profile.module.css';

const Profile = (props) => {
    let PostMaping = props.state.postElements.map(pos => <Post post={pos.post}/>);

    let PostRef = React.createRef();
    let NewPost = () => {
        let post = PostRef.current.value;
        props.newPost(post);
        PostRef.current.value = '';
    }

    return (
        <div>
            <div className={style.ProfileInfo}>
                <div className={style.user}>
                    <img src="https://i.ya-webdesign.com/images/male-avatar-icon-png.png" alt="user"/>
                </div>
                
                <div className={style.Info}>
                    <p>Имя: Илон</p>
                    <p>Фамилия: Маск</p>
                    <p>Лет: 17 лет</p>
                    <p>Страна: Казахстан</p>
                    <p>Город: Тараз</p>
                </div>
                <div className={style.postnew}>
                    <h1>Написать пост</h1>
                    <input className={style.newpost} ref={PostRef}/><br/><br/>
                    <button onClick={NewPost}>Отправить</button>
                </div>
                {PostMaping}
            </div>
        </div>
    );
}

export default Profile;