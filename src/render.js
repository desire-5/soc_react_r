import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import  state, {addPost, updateNewPostText} from './redux/state';
import  state, {addPost, updateNewPostText, addMessage, updateMessage} from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} updateNewPostText1={updateNewPostText} addPost={addPost}
          addMessage={addMessage} updateMessage={updateMessage}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
