"use client"

import Post from "@/components/SocialMediaPage/Post/Post";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import ProfileBlock from "@/components/SocialMediaPage/UserData/ProfileBlock";
import { UserType } from "@/types/LocalTypes";

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
        <div className="m-auto w-[1248px] h-screen ">
            <div className="social-media-header h-[60px] flex items-center"><Button size="large" ghost onClick={GoBack}>{"<"} Back</Button></div>
            <div className="flex bg-white h-fit">
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
            <div className="body-inner bg-white h-fit">
            
                <Post/>
                <Post/>

            </div>
            </div>
        </div>
    </div>
};

export default InstugremPage;