import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";
import React from "react";


export const Message = (props: MessageType) => {


    return (

            <div className={s.message}>{props.message}</div>

    )
}
