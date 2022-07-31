import React from "react";
import s from './Post.module.css';

type MessageType = {
    message: string,
    likesCount: number
}

export const Post = (props:MessageType) => {
    return (

        <div>

            <div className={s.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTYz6zMmmk92pD_-XM5XPhseOP3QsglcqGg&usqp=CAU'}/>
                {props.message}
                <div>
                    <span>Likes</span> {props.likesCount}
                </div>
            </div>
        </div>

    )
}