import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0, message0} from "../HW1";

type FriendMessageType = {
    message: {id: number}
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img alt={'avatar'}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={message0.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {friendMessage0.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {friendMessage0.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {friendMessage0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
