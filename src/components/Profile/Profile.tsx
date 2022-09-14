import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileTypes = {
    postData: Array<PostType>
    addPost: (newText:string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string


}

export const Profile = (props:ProfileTypes) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} />
        </div>
    )
}