"use client"

import { useState } from "react";
import { Button, Input } from "antd";
import Image from "next/image";
import icons from "@/assets/svg/icons";

const Reactions = () => {
    const [showComments, setShowComments] = useState<boolean>(false);

    const ToggleComments = () => {
        setShowComments(current_state => {
            return !current_state;
        });
    };

    return <div>
        
    <div className="post-reactions pt-4 gap-1 pb-1 flex flex-col">
        <div className="reactions-wrapper  flex gap-5">
            <button className="likes" dangerouslySetInnerHTML={{__html:icons.heart}}>
                
            </button>
            <button className="comment" dangerouslySetInnerHTML={{__html:icons.comment}}>
                
            </button><button className="share" dangerouslySetInnerHTML={{__html:icons.share}}>
               
            </button>
            <button className="save" dangerouslySetInnerHTML={{__html:icons.save}}>
                
            </button>
        </div>
        <div className="like-number font-semibold">
            <span>
            500,000 likes
            </span>
        </div>
        {/* <div className="comments">
            120 <button onClick={ToggleComments}>comments</button>
        </div> */}
        
    </div>
    <div className="post-content">
        <span className="font-bold">username </span>
        been to paris
    </div>
    <div className="comments-bottom" >
        <div className="view-comments">
        view all 600 comments
        </div>
        <div className="add-comment">

            <Input placeholder="Add Comment" bordered={false} />

            
        </div>
        </div>
    {/* <p className="post-content font-light mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        auctor, turpis vitae efficitur porta, turpis.
    </p> */}
    { showComments &&
    <div className="comment-section flex pt-5 flex-col">
        <div className="comments pl-5 mb-5">
            <div className="comment flex px-4 items-center justify-between">
                beutifull{" "}
                <div className="likes-wrapper">
                    556 <button>♡</button>
                </div>
            </div>
        </div>
        <div className="new-comment flex items-center gap-4 p-4">
            <Button shape="circle">E</Button>
            <Input />
            <Button shape="circle">S</Button>
        </div>
    </div>}
</div>
};

export default Reactions;
