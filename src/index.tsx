import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, state, updateNewPostText} from "./redux/state";
import {App} from "./App";



let renderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={state.profilePage.newPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(state)