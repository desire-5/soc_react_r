import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import profileReducer, { addPostActionCreator, dellPost } from "./profile-reducer"


//tdd

let state = {
    posts: [
        {id: 1, message: 'hello 1234', likesCount: 222, age:23},
        {id: 2, message: 'how are you', likesCount: 1}
    ], 
 
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("from test");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);

});

it('after dell length will be decrement', () => {
    // 1. test data
    let action = dellPost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);

});