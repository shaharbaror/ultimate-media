import { StaticImageData } from "next/image";

export type RickCompProps = {
    rick_name:string;
}

export type RickType = {
    characters?:{
        info: {
            count:number | null;
        };
        results: {
            name?:string;
            status?:string;
        }[];
    };
    location?: {
        id?:string | number;
    };
    episodesByIds?: {
        id?:string | number;
    }[]
}

export type NewPostProps = {
    user: {
        profilePicture:string;
        name:string | null;
        isFollowing?: boolean;
    }
    postContent:{
        title?: string | JSX.Element;
        image?: string;
        content?: string | JSX.Element;
    }
    postReaction: {
        upVotes: string | number;
        comments: string | number;
    }
}

export type FriendType = {
    name: string;
    profilePicture?: string | StaticImageData;
    online?:boolean;
    lastSeen?:number | string;
}

export type UserType = {
    name: string;
    profilePicture?: string | StaticImageData;

    friends?: FriendType[];
    notifications?:[];
    posts?:NewPostProps[];
}

export type SideProfileProps = {
    profilePicture: string | StaticImageData;
    username: string;
    firstName:string;

    suggested?: {
        username: string;
        profilePicture: string | StaticImageData;
    }[];
}
