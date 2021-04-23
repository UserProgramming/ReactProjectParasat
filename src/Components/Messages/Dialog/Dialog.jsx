import React from 'react';
import Text from './Text';
import style from './Dialog.module.css';

const Dialog = (props) => {
    
    let refMessage = React.createRef();

    let btn = () => {
        let text = refMessage.current.value;
        props.newMessage(text);
        refMessage.current.value = '';
    }

    let MapingMessage = props.state.messageElements.map(message => <Text text={message.text}/>);
    return (
        <div className={style.Dialog}>
            {MapingMessage}
            <input type="text" ref={refMessage}/><br/><br/>
            <button onClick={btn}>Отправить</button>
        </div>
    );
}

export default Dialog;