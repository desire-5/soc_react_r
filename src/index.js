
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  store from './redux/redux-store';
// import  state, {addPost, updateNewPostText, addMessage, updateMessage, subscribe} from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
// import {Provider} from './StoreContext'; // dont use

// example how work mapStateToprops
// setInterval(()=>{
//   store.dispatch({type:"TEST"})
// }, 1000);  


//  let rerenderEntireTree = (state) =>{
  // debugger
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App 
        // <App state={state} dispatch={store.dispatch.bind(store)} store={store} // without use context

            // addPost={store.addPost.bind(store)}
            // addMessage={store.addMessage.bind(store)} updateMessage={store.updateMessage.bind(store)}
          />

        </Provider>   
      </BrowserRouter>,
      document.getElementById('root')
    );
// }

// function connect doing own subscribe!!!

// rerenderEntireTree( store.getState() );

// store.subscribe(()=>{
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

{/* <Browserrouter> */}

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App mesagesData={mesagesData} posts={posts} dialogsData={dialogsData}/> */}
//     <App state={state} addPost={addPost}/>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
