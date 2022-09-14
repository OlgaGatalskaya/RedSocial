import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItems";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";
import React from "react";



export const Dialogs = (props:DialogPageType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addNewMessageHandler = () => {
      alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map((e) => {
                    return (
                        <DialogItem name={e.name} id={e.id}/>
                    )

                })}

            </div>
            <div>
                <div className={s.messages}>
                    {props.messageData.map(m => {
                        return (
                            <Message message={m.message} id={m.id}/>
                        )
                    })}
                </div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addNewMessageHandler}>Add message</button>
            </div>


        </div>
    )
}