let rerenderEntireTree=()=> {
    console.log('state changed')
}

let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'hello 1234', likesCount: 222, age:23},
            {id: 2, message: 'how are you', likesCount: 1}
        ],
        newPostText:'take js'
    },
    dialogsPage:{
        dialogsData:[
            {id: 1, name: 'Bobe' },
            {id: 2, name: 'Jonatan' },
            {id: 3, name: 'Huston' },
            {id: 4, name: 'Mars' },
            {id: 5, name: 'James' },
        ],  
        mesagesData:[
            {id: 1, message: 'hello' },
            {id: 2, message: ')))))' },
            {id: 3, message: 'i am js' },
            {id: 4, message: 'react' },
            {id: 5, message: 'nodejs' },
        ],
        startMessage:'222'
    }
}
window.state = state;

export let addPost = () =>{
    // debugger;
    let newObj = {
        id: 55,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newObj);
    state.profilePage.newPostText ='';
    rerenderEntireTree(state);
    
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = (newMess)=>{
    let newMessobj = {
        id: 44, message: newMess 
    }
    state.dialogsPage.mesagesData.push(newMessobj)
    rerenderEntireTree(state);
    updateMessage('');
}

export let updateMessage = (newMess)=>{
   
    state.dialogsPage.startMessage = newMess;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
 rerenderEntireTree = observer;

}
export default state;