import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type StateTypeProps = {
    state: RootStateType
    addPost: (newText:string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string

}
export const App = (props: StateTypeProps) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path={'/dialogs'} component={Dialogs}/>
                        <Route path={'/profile'} component={Profile}/>*/}

                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                messageData={props.state.dialogsPage.messageData}/>}/>
                <Route path={'/profile'} render={() => <Profile postData={props.state.profilePage.postData}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}
                                                                newPostText={props.newPostText}
                />}/>
            </div>
        </div>

    );
}



