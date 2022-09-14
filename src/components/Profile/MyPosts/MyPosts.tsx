import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsTypes = {
    postData: Array<PostType>
    addPost: (newText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}


export const MyPosts = (props: MyPostsTypes) => {

    let postsElement = props.postData.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })


    const addPost = () => {

        props.addPost(props.newPostText)
        props.updateNewPostText('')


    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let newText = e.currentTarget.value
        props.updateNewPostText(newText)

    }

    return (

        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}

                </div>
            </div>
        </div>


    )
}