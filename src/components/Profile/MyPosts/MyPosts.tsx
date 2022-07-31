import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (

        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={'Hi, how are you?'} likesCount={23}/>
                    <Post message={"It's my first post"} likesCount={0}/>

                </div>
            </div>
        </div>


    )
}