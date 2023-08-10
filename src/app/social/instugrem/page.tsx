"use client"

import Post from "@/components/SocialMediaPage/Post/Post";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";


const InstugremPage = () => {
    const router = useRouter();

    const GoBack = () => {
        router.back();
    }

    return <div>
        <div className="m-auto w-4/5 h-screen bg-white h-fit">
            <div className="social-media-header bg-black h-[60px] flex items-center "><Button size="large" ghost onClick={GoBack}>{"<"} Back</Button></div>
            <div className="flex">
                <div className="instagram-user-data flex flex-col gap-6">
                    user Data
                </div>
            <div className="body-inner">
            
                <Post/>
                <Post/>

            </div>
            </div>
        </div>
    </div>
};

export default InstugremPage;