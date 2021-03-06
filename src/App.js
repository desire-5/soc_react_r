import React from 'react';
import {Route, BrowserRouter, withRouter, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import News from './components/News/News'
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/Users.container';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import { initializedApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';


class App extends React.Component  {

  componentDidMount() {
    // debugger
   this.props.initializedApp();
  }
//  debugger;
render(){
  if(!this.props.initialized)
    return <Preloader/>

  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <HeaderComponent/>
      <Nav/>
      <div className='app_wrapper_content'>
        
        {/* <Route path='/profile' component={Profile}/> */}
        <Switch>
          <Route exact path='/' render={()=> <Redirect to={'/profile'}/>}/>
          {/* <Route path='/profile/:user_id?' render={withSuspense(ProfileContainer)}/> */}
          <Route path='/profile/:user_id?' render={() => <ProfileContainer

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

            <Route path='/login' render= {() => <Login/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music}/>
          <Route path='*' render={() =><div>404 Not Found</div> }/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}
}
let mapStateToProps = (state)=> ({
    initialized: state.app.initialized
})
export default withRouter(connect(mapStateToProps, {initializedApp})(App));
