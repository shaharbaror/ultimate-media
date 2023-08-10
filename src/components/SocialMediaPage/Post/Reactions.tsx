"use client"

import { useState } from "react";
import { Button, Input } from "antd";

const Reactions = () => {
    const [showComments, setShowComments] = useState<boolean>(false);

    const ToggleComments = () => {
        setShowComments(current_state => {
            return !current_state;
        });
    };

    return <div>
    <div className="post-reactions p-4 flex">
        <div className="comments">
            120 <button onClick={ToggleComments}>comments</button>
        </div>
        <div className="reactions-wrapper  flex gap-5">
            <div className="likes-wrapper">
                556 <button>♡</button>
            </div>
            <div className="favorites-wrapper">
                70 <button>F</button>
            </div>
            <div className="shares-wrapper">
                15 <button>S</button>
            </div>
        </div>
    </div>
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
