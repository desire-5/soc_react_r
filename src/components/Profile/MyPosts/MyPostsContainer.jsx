import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext'; //dont use
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        // newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => ({
    // updateNewPostText: (text)=>{
    //     let action = updateNewPostTextActionCreator(text);
    //     dispatch(action);
    // },
    addPost: (newPost) => {
        dispatch(addPostActionCreator(newPost));
    }
})
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

// describe  CONTAINER COMPONENT throw own CONTEXT without react-redux!


// const MyPostsContainer = (props) => {

    //debugger;
//   let state = props.store.getState();
//   let addPost = () => {
//     // debugger;
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     // debugger;
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//     // props.dispatch({type:'UPDATE_NEW_POST_TEXT',newText:text});  //it was before

//     // props.updateNewPostText1(text);
    
//   }
 
    // return (
      
        // <StoreContext.Consumer>
        //     { store => {
        //         let state = store.getState();
        //         let addPost = () => {
        //             // debugger;
        //             store.dispatch(addPostActionCreator());
        //         }
        
        //         let onPostChange = (text) => {
        //             // debugger;
        //             let action = updateNewPostTextActionCreator(text);
        //             store.dispatch(action);
        //         }
        //         return <MyPosts updateNewPostText = {onPostChange} addPost={addPost}
        //             newPostText={state.profilePage.newPostText} 
        //             posts={state.profilePage.posts}/>

        //     /* use withot context */
        //     /* <MyPosts updateNewPostText = {onPostChange} addPost={addPost}
        //             newPostText={state.profilePage.newPostText} 
        //             posts={props.store.getState().profilePage.posts}/> */
            
        //     }}
        // </StoreContext.Consumer>
       
    // );
   
// }
// export default MyPostsContainer
