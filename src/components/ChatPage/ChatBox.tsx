import React,{useReducer, useState, Fragment} from "react";

import { Divider, Button, Input } from "antd";

const reducerTemplate = {
    allMessages:[{
        time:"07:14",
        content:"L",
        isSelf:false,
    }],
}

const reducer = (state: any, action: any) => {
    if (action.type === "newSelfMessage") {
        return {...state, allMessages:[...state.allMessages,{
            time:"05:67",
            content:action.payload.content,
            isSelf:true,
        } ]};
    }
}

const ChatBox = () => {

    const [chat, dispatchChat] = useReducer(reducer,reducerTemplate)
    const [message,setMessage] = useState<string>("");

    const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
        dispatchChat({type:"newSelfMessage", payload:{content:message}})
        setMessage("");
    }

    const putDivider = (lastMessage:boolean | undefined, thisMessage:any) => {
        if (lastMessage !== undefined) {
            return <>{lastMessage !== thisMessage.isSelf && <Divider className="chat-devider"/>}</>
        }
        
    }

    const ShowMessages = () => {
        let lastMessage:boolean;
        return chat.allMessages.map((single_message,i) => {
            
            return  <Fragment key={`message-${i}`}>
                {putDivider(lastMessage, single_message)}
                {lastMessage = single_message.isSelf}
                <div className={single_message.isSelf ? "self-chat": "friend-chat"} key={`message-${i}`}>
            <span className="time-sent">07:57
                </span>
                {single_message.content}
            </div>
            </Fragment>
        })
        
    }

    return <div className="chat-container">
    <div className="chat-profile-info"></div>
    <div className="chat-inner  hide-scrollbar">
        <div className="chat">

            <div className="friend-chat">
                <span className="time-sent">07:56
                </span>
                hello world?
            </div>
            <Divider className="chat-devider"/>
            {ShowMessages()}
            
        </div>
        
        <div className="new-message">
            <Button size="middle" shape="circle" style={{backgroundImage:"url(https://pbs.twimg.com/profile_images/1162710956218245120/L4b1guuv_400x400.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} ></Button>
            <Input  className="w-3/5" size="large" value={message} onChange={(e) => {setMessage(e.target.value)}} onPressEnter={sendMessage}  />
            {/* <Button size="large" onClick={sendMessage} ghost>Sand massage</Button> */}
        </div>
    </div>
</div>
};

export default ChatBox;