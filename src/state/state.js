import {rrender} from '../render'

let state = {
    postElements: [],
    messageElements: [
        {text: 'hello'}
    ],
    useMessage: [
        {name: 'Nazarbaev', message:'hello'},
        {name: 'Takaev', message:'Привет'},
        {name: 'Putin', message:'Здравствуйте'},
        {name: 'Константин', message:'Ну как там с новальным?'},
        {name: 'Алина', message:'Привет)'},
        {name: 'Саша', message:'ХАЙ'},
        {name: 'Нурсултан', message:'как ты?'},
        
    ],
    friends: [
        {name: 'Vadim', lastname: 'Никалаев', age: 50},
        {name: 'Виктор', lastname: 'Резнов', age: 60},
        {name: 'Александр', lastname: 'Пушкин', age: 25},
        {name: 'Елена', lastname: 'Распутина', age: 16},
        {name: 'Никалай', lastname: 'Дудь', age: 30},
        {name: 'Сергей', lastname: 'Бандурин', age: 18},
        {name: 'Маша', lastname: 'Никрасава', age: 19},
        {name: 'Дмитрий', lastname: 'Незовцев', age: 20},
        {name: 'Ангелина', lastname: 'Петрова', age: 23},
    ],
    news: []
}

export let newPost = (text) => {
    let textPost = {id: 1, post: text};

    state.postElements.push(textPost);
    rrender(state);
}

export let newMessage = (text) => {
    let textMessage = {id: 1, text: text}

    state.messageElements.push(textMessage);
    rrender(state);
}



export let Title = (text , article) => {
    let textTitle = {title: text, article: article}

    state.news.push(textTitle);
    rrender(state);
} 


export default state;