import React from "react";
import Image from "next/image";
import { SideProfileProps } from "@/types/LocalTypes";
import Link from "next/link";


const SideProfiles = ({profilePicture, username, firstName, suggested}: SideProfileProps) => {
    return <div className="side-profiles-wrapper flex flex-col gap-3">

        <div className="prof flex gap-3 items-center">
            <div className="profile-pic">
                <Image src={profilePicture} alt={`${username}-pic`} fill />
            </div>
            <div className="username-wrapper flex flex-col">
            <span>{username}</span>
            {firstName}
            </div>
            <span>switch</span>
        </div>

        <h3>Suggested Acounts:</h3>
        <div className="prof other flex gap-3 items-center">
            <div className="profile-pic">
                <Image src={profilePicture} alt={`${username}-pic`} fill />
            </div>
            <div className="username-wrapper flex flex-col">
            <span>{username}</span>
            {firstName}
            </div>
            <span>follow</span>
        </div>
        <div className="prof other flex gap-3 items-center">
            <div className="profile-pic">
                <Image src={profilePicture} alt={`${username}-pic`} fill />
            </div>
            <div className="username-wrapper flex flex-col">
            <span>{username}</span>
            {firstName}
            </div>
            <span>follow</span>
        </div>
    </div>
};

export default SideProfiles;