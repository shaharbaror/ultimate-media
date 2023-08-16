import React, { useState, useEffect } from "react";

import Image, { StaticImageData } from "next/image";
import { Input } from "antd";
import EyalPng from "../../../public/eyal-profile-pic.png";
import NeryaPng from "../../../public/default-profile-pic.png";

const DUMMY_FRIENDS:{name:string, profilePicture?:string|StaticImageData}[] = [{
    name:"Eyal",
    profilePicture: EyalPng
},{
    name:"Yuval",
},{
    name:"Yuvalilon",
},{
    name:"Yahelilon",
},{
    name:"Zoxarc",
},{
    name:"Pelegpel",
}]

const FriendsField = () => {
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        const searchTimeout = setTimeout(() => {
            SearchForUser();
        }, 500);
        return () => {
            clearTimeout(searchTimeout);
        };
    }, [inputValue]);

    const onChangeInputHandler = (
        event: React.FocusEvent<HTMLInputElement>
    ) => {
        setInputValue(event.target.value);
    };

    const SearchForUser = () => {
        console.log(inputValue);
    };

    const ShowFriends = () => {
        return DUMMY_FRIENDS.map((firend, i) => {
            if (firend.name.toLowerCase().includes(inputValue.toLowerCase()) || inputValue === "") {
            return <div className="friend-item" key={`friend-${i}`}>
            <Image src={firend.profilePicture || NeryaPng} alt="" width="50" height="50" />
            {firend.name}
        </div>
            }
        });
    }

    return (
        <div className="chat-page-friends">
            <div className="friends-search">
                <Input
                    className="friends-search-input"
                    size="large"
                    onChange={onChangeInputHandler}
                />
            </div>
            <div className="friends-recent">
               {ShowFriends()}
            </div>
        </div>
    );
};

export default FriendsField;
