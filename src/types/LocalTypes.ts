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