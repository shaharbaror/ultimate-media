"use client"

import { Button, Divider, Input } from "antd";
import React, { useState, useEffect } from "react";
import Image from "next/image";


const ChatPage = () => {
    const [inputValue, setInputValue] = useState<string>("");

    

    useEffect(()=> {
        const searchTimeout = setTimeout(()=> {
            SearchForUser();
        },500);
        return ()=> {
            clearTimeout(searchTimeout);
        }
    }, [inputValue])

    const onChangeInputHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const SearchForUser = () => {
        console.log(inputValue);
    }

    return <div>
        <div className="chat-page-header">
            Head
        </div>
        <div className="chat-page-body">
            <div className="chat-page-friends">
                <div className="friends-search">
                   <Input className="friends-search-input" size="large" onChange={onChangeInputHandler}/>
                </div>
                <div className="friends-recent">
                    <div className="friend-item">
                        Eyal
                    </div>
                    {/* <Divider style={{borderColor:"white"}}/> */}
                    <div className="friend-item">
                        Nerya
                    </div>
                </div>
            </div>
            <div className="chat-container">
                <div className="chat-profile-info"></div>
                <div className="chat-inner">
                    <div className="chat"></div>
                    
                    <div className="new-massage">
                        <Button size="middle" shape="circle" style={{backgroundImage:"url(https://pbs.twimg.com/profile_images/1162710956218245120/L4b1guuv_400x400.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} ></Button>
                        <Input className="w-3/5" size="large"  />
                        <Button size="large" ghost>Sand massage</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ChatPage;