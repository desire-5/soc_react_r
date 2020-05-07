import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'

function App(props) {
//  debugger;
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <Header/>
      <Nav/>
      <div className='app_wrapper_content'>
        {/* <Dialogs /> */}
        
        {/* <Route path='/profile' component={Profile}/> */}
        <Route path='/profile' component={() => <Profile  profilePage={props.state.profilePage}
                addPost={props.addPost} updateNewPostText1={props.updateNewPostText1} /> } />

        {/* <Route path='/dialogs' component={Dialogs}/> */}
        <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} 
              updateMessage={props.updateMessage} addMessage={props.addMessage}
          /> }/>

        <Route path='/news' component={News} />
        <Route path='/music' component={Music}/>
      </div>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
