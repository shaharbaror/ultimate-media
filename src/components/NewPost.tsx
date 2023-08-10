import React from "react";
import Image from "next/image";
import { NewPostProps } from "@/types/LocalTypes";

const NewPost = ({user, postContent, postReaction}: NewPostProps) => {
    return <div className="flex flex-col rick-item">
        <div className="poster-wrapper">
            <Image src={user.profilePicture} alt="" fill />
            <h3>{user.name}</h3>
            {user.isFollowing ? <p> -Following</p> : <div className="post-follow-button-wrapper"> <button>Follow</button></div>} 
        </div>
         <div className="content-wrapper">
            <h3>{postContent.title}</h3>
                    <p>{postContent.content}</p>
                    </div>
                    <div className="reaction-container flex gap-2">
                    
                        {" "}
                        <div className="comments-button-container">
                            <button>comments - {postReaction.comments}</button>
                        </div>{" "}
                        <div className="reaction-buttons-container ">
                            <p>{postReaction.upVotes}</p>
                            <button> Up</button> <button>Down</button>
                        </div>
                    </div>
    </div>
};

export default NewPost;