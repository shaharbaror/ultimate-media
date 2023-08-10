import React, {useMemo} from "react";

type TopicItemProps = {
    image:string;
    title:string;
    subTitle?:string | JSX.Element;
    textPositionX?: string;
    textPositionY?:string;
}

const TopicItem = ({subTitle, title, image, textPositionX = "center", textPositionY = "center"}: TopicItemProps) => {
    
    const textPosX = useMemo(() => {
        switch (textPositionX) {
            case "left": 
                return "items-start";
            case "center":
                return "items-center"
            case "right":
                return "items-end";
        }
    },[textPositionX]);

    const textPosY = useMemo(() => {
        switch (textPositionY) {
            case "top": 
                return "justify-start";
            case "center":
                return "justify-center"
            case "bottom":
                return "justify-end";
        }
    },[textPositionY])
    
    
    return <div className={`topic-item ${textPosX} ${textPosY}`} style={{backgroundImage:`url(${image})`}}>
        <div className={`topic-item-content`}>
            <h3 className={`title`}>{title}</h3>
            {subTitle && <h4 className={`sub-title`}>{subTitle}</h4>}
        </div>
    </div>
};

export default TopicItem;