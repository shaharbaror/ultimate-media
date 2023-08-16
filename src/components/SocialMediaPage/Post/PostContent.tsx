import Image from "next/image";
import DeafultPost from "../../../../public/instugram-default-post.jpg";
import Reactions from "./Reactions";


const PostContent = () => {
    return  <div className="post-content">
        {/*need to have something better for sizing here */}
    
    <Image
        src={DeafultPost}
        alt=""
        fill
        className="ins-home-post"
        
    />
    
    
    
</div>
};

export default PostContent;