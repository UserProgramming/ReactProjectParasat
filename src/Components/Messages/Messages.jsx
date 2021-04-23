import React from 'react';
import Message from './Message';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';

const Messages = (props) => {
    let MapingDialog = props.state.useMessage.map(dialog => <Message name={dialog.name} message={dialog.message}/>)
    return (
        <div className={style.dialog}>
            <h1>Сообщение</h1>
            <NavLink to='/dialog' className={style.link}>
                {MapingDialog}
            </NavLink>
        </div>
    );
}

export default Messages;