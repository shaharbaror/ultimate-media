"use client"

import Post from "@/components/SocialMediaPage/Body/Post/Post";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import ProfileBlock from "@/components/SocialMediaPage/UserData/ProfileBlock";
import { UserType } from "@/types/LocalTypes";
import SideProfiles from "@/components/SocialMediaPage/Body/MyProfile/SideProfiles";
import defaultProfilePic from "../../../../public/default-profile-pic.png";

const DUMMY_DATA: {user:UserType} = {
    user: {
        name:"shahar",
        friends: [{
            name:"eyal",
            online:true,
        }, {
            name:"nerya",
            online:false,
        }]
    },
}

const InstugremPage = () => {
    const router = useRouter();

    const GoBack = () => {
        router.back();
    }

    return <div>
        <div className="instagram-body-wrapper bg-white">
            <div className="flex ">
                <div className="instagram-user-data flex flex-col gap-6">
                        <ProfileBlock {...DUMMY_DATA.user}/>
                    <div>
                        <div>
                            Bell
                        </div>
                        <div>
                            Post
                        </div>
                    </div>
                    <div>
                        <div>
                            Home
                        </div>
                        <div>
                            Search
                        </div>
                    </div>
                </div>
            <div className="insta-body">
                <div className="body-inner">
                <Post/>
                <Post/>
                </div>
                <SideProfiles username="Shaharbaror1" firstName="Shahar" profilePicture={defaultProfilePic}/>
            </div>
            </div>
        </div>
    </div>
};

export default InstugremPage;