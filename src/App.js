import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
// import Header from './components/Header/HeaderComponent'
import Nav from './components/Nav/Nav'
// import Profile from './components/Profile/Profile'
// import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users'
import UsersContainer from './components/Users/Users.container';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';

function  App(props) {
//  debugger;
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <HeaderComponent/>
      <Nav/>
      <div className='app_wrapper_content'>
        
        {/* <Route path='/profile' component={Profile}/> */}

        <Route path='/profile/:user_id' render={() => <ProfileContainer

        // <Route path='/profile' render={() => <Profile  store={props.store} // use witount context

                //profilePage={props.state.profilePage}
                // dispatch={props.dispatch }
                // addPost={props.addPost} updateNewPostText1={props.updateNewPostText1} 
                /> } />

        {/* <Route path='/dialogs' component={Dialogs}/> */}

        <Route path='/dialogs' render={ () => <DialogsContainer

        // <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} // used without context
        
          // Dialogs store={props.store}
          // dialogsPage={props.state.dialogsPage} 
          // dispatch={props.dispatch}
              // updateMessage={props.updateMessage} addMessage={props.addMessage}
          /> }/>

          <Route path='/users' render={ () => <UsersContainer/>  }/>

        <Route path='/news' component={News} />
        <Route path='/music' component={Music}/>
      </div>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
