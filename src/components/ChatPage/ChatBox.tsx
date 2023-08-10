import React from "react";

import { Divider, Button, Input } from "antd";

const ChatBox = () => {
    return <div className="chat-container">
    <div className="chat-profile-info"></div>
    <div className="chat-inner">
        <div className="chat">

            <div className="friend-chat">
                <span className="time-sent">07:56
                </span>
                hello world?
            </div>
            <Divider className="chat-devider"/>
            <div className="self-chat">
            <span className="time-sent">07:57
                </span>
                hello!
            </div>
            
        </div>
        
        <div className="new-massage">
            <Button size="middle" shape="circle" style={{backgroundImage:"url(https://pbs.twimg.com/profile_images/1162710956218245120/L4b1guuv_400x400.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} ></Button>
            <Input className="w-3/5" size="large"  />
            <Button size="large" ghost>Sand massage</Button>
        </div>
    </div>
</div>
};

export default ChatBox;