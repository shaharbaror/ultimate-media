import React, { useState } from "react";

import Link from "next/link";

const DUMMY_TOPICS: Array<{
    image: string;
    title: string;
    content: JSX.Element | string;
}> = [
    {
        image: "https://cdn5.vectorstock.com/i/1000x1000/19/34/smartphone-futuristic-cyber-messenger-chat-concept-vector-28151934.jpg",
        title: "Groupchats",
        content: "join or create a groupchat and text with your friends",
    },
];

const SingleTopic = ({
    image,
    title,
    content,
    classname = "",
}: {
    image: string;
    title: string;
    content: JSX.Element | string;
    classname?: string;
}) => {
    return (
        <div
            className={`single-topic ${classname}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

const Topics = () => {
    const [currentTopic, setCurrentTopic] = useState<number>(0);

    const ShowCurrentTopic = () => {
        let topic = DUMMY_TOPICS[currentTopic];
        return (
            <SingleTopic
                image={topic.image}
                title={topic.title}
                content={topic.content}
            />
        );
    };

    return (
        <section className="topics section">
            <div className="topics-inner">
                <div className="topics-button-wrapper">
                    <div className="topics-before"></div>
                </div>
                <div className="single-topic-wrapper">{ShowCurrentTopic()}</div>
                <div className="topics-button-wrapper">
                    <div className="topics-next"></div>
                </div>
            </div>
        </section>
    );
};

export default Topics;