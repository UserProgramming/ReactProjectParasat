import React from 'react';
import New from './New';
import style from './News.module.css';

const News = (props) => {

    let NewsRef = React.createRef();
    let NewsRef1 = React.createRef();


    let MapingNews = props.state.news.map(news => <New title={news.title} article={news.article}/>);

    let addTitle = () => {
        let text = NewsRef.current.value;
        let article = NewsRef1.current.value;
        props.Title(text, article);
        NewsRef.current.value = '';
        NewsRef1.current.value = '';
    }

    return (
        <div>
            <h1>Новости</h1>
            <div className={style.NewsForm}>
                <input type="text" placeholder='Заголовок' ref={NewsRef}/><br/><br/>
                <textarea placeholder='text' ref={NewsRef1}/><br/><br/>
                <button onClick={addTitle}>Добавить</button>
                </div>
                <div className={style.News}>
                    {MapingNews}
                </div>
        </div>
    );
}

export default News;