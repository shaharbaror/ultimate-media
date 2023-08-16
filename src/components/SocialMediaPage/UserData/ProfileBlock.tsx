import React from "react";
import { UserType } from "@/types/LocalTypes";
import Image from "next/image";
import NoProfile from "../../../../public/default-profile-pic.png";

import { useRouter } from "next/navigation";

const ProfileBlock = ({name, profilePicture, friends} : UserType) => {

    const router = useRouter();

    const onClickChat = () => {
        router.push("chat");
    }

    const onClickProfile = () => {
        router.push("profile");
    }

    const onClickFriends = () => {
        router.push("friends");
    }
    return (
        <div className="profile-block px-5 pt-5 flex flex-col">
            <div className="profile-instagram view">
                <Image src={profilePicture || NoProfile} width="40" height="40" alt="profile-pic" />
                {name}
                </div>
            <div className="view-profile view" onClick={onClickProfile}>profile</div>
            <div className="friends-instagram view" onClick={onClickFriends}>{friends?.length || 0} friends</div>
            <div className="chat-instagram view" onClick={onClickChat}>chat</div>
        </div>
    );
};


export default ProfileBlock;