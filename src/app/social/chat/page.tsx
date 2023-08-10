"use client"


import React from "react";
import FriendsField from "@/components/ChatPage/FriendsField";
import ChatBox from "@/components/ChatPage/ChatBox";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const ChatPage = () => {
    
    const router = useRouter();

    const goBack = () => {
        router.back()
    }

    return <div>
        <div className="chat-page-header">
            <Button size="large" ghost onClick={goBack}>{"<"} Back</Button>
        </div>
        <div className="chat-page-body">
           <FriendsField />
            <ChatBox />
        </div>
    </div>
};

export default ChatPage;