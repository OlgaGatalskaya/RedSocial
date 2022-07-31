import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string,
    id: string
}
const DialogItem = (props:DialogItemProps) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessageProps = {
    message:string
}

const Message = (props:MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Olga'} id={'1'}/>
                <DialogItem name={'Marina'} id={'2'}/>
                <DialogItem name={'Natalia'} id={'3'}/>
                <DialogItem name={'Ignat'} id={'4'}/>
                <DialogItem name={'Oleg'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'Good morning'}/>
            </div>
        </div>
    )
}