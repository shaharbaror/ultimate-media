import Image from "next/image";

import EyalProfilePic from "../../../../../public/eyal-profile-pic.png";
import { Button, Divider, Input } from "antd";
import Reactions from "./Reactions";
import PostContent from "./PostContent";

const Post = () => {
    return (
        <div className="post flex flex-col w-[468px]">
            <div className="profile-wrapper flex items-center gap-1 pb-3 pl-1">
                <Image src={EyalProfilePic} alt="" width="50" height={50} />
                Eyal Lolcker
            </div>
            <PostContent />
            <Reactions/>
            <Divider/>
        </div>
    );
};

export default Post;
