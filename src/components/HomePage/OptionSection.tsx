import React, {useState} from "react";
import { useRouter } from "next/navigation";
import TopicItem from "../TopicItem";
import { Button } from "antd";

const DUMMY_OPTIONS: {
    name: string;
    subTitle?: string;
    image?: string;
    posX?: string;
    posY?: string;
    link: string;
}[] = [
    {
        image:"https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
        name: "waghtzap",
        subTitle: "text and chat with your friends",
        posX: "left",
        posY: "bottom",
        link: "/social/chat/",
    },
    {
        image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        name: "instugrem",
        subTitle: "post and watch what others do",
        posX: "left",
        posY: "top",
        link: "/social/instugrem/",
    },
    {
        name: "meatings",
        subTitle: "chat with your friends or scedule a meeting and talk with them like in the phone",
        posX: "left",
        posY: "bottom",
        link: "/social/meetings/",
    },
    {
        name: "games",
        subTitle: "play with your friends and others online",
        posX: "left",
        posY: "bottom",
        link: "/games/",
    },
];

const OptionSection = () => {
    const [counter, setCounter] = useState<number>(0);
    const [pressed, setPressed] = useState<number>(0);

    const router = useRouter();

    const onNextOption = (amount:number) => {
        
        setCounter(current_counter => {
            if ((pressed < DUMMY_OPTIONS.length -2 || amount > 0 ) && (pressed >0 || amount < 0))
                return current_counter + amount;
            return current_counter;
        });
        setPressed(current_pressed => {
            if ((pressed < DUMMY_OPTIONS.length -2 || amount > 0)  && (pressed >0 || amount < 0)) {

                return current_pressed + (amount <=0 ? 1: -1);
            }
            return current_pressed;
        })
        console.log(pressed);
        
    };
    const onClickTopic = (path:string) => {
        router.push(path)
    };
    const ShowNextOption = () => {
        return <div className="option-container" style={{transform:`translateX(${counter}px)`}}>
            {DUMMY_OPTIONS.map((opt,i) => {
            return <div className={`option`} onClick={()=> {
                onClickTopic(opt.link)
            }} key={`option-${i}`}>
            <TopicItem
                image={opt.image || ""}
                textPositionX={opt.posX}
                textPositionY={opt.posY}
                title={opt.name}
                subTitle={opt.subTitle}
            />
        </div>
        })}
        </div>
        
    };

    return <div className="home-options-wrapper">
    <Button
        onClick={()=> {
            onNextOption(700)
        }}
        size="middle"
        ghost
        type="default"
        rootClassName="back-button"
    >
        {" "}
        Back{" "}
    </Button>
    {ShowNextOption()}
    <Button
        onClick={()=> {
            onNextOption(-700)
        }}
        size="middle"
        ghost
        type="default"
        rootClassName="next-button"
    >
        {" "}
        Next{" "}
    </Button>
</div>
};

export default OptionSection;