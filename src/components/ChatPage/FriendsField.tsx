import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Input } from "antd";
import EyalPng from "../../../public/eyal-profile-pic.png";
import NeryaPng from "../../../public/default-profile-pic.png";

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
                <div className="friend-item">
                    <Image src={EyalPng} alt="" width="50" height="50" />
                    Eyal
                </div>
                {/* <Divider style={{borderColor:"white"}}/> */}
                <div className="friend-item">
                    <Image src={NeryaPng} alt="" width="50" height="50" />
                    Nerya
                </div>
            </div>
        </div>
    );
};

export default FriendsField;
