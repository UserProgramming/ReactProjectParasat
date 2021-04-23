import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { newMessage, newPost, Title } from './state/state';

export let rrender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} newPost={newPost} newMessage={newMessage} Title={Title}/>
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);}
