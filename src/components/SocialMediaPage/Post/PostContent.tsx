import Image from "next/image";
import DeafultPost from "../../../../public/instugram-default-post.jpg";


const PostContent = () => {
    return  <div className="post-content">
    <div className="title-wrapper">
        <h3 className="font-semibold">Went To Paris</h3>
    </div>

    <Image
        src={DeafultPost}
        alt=""
        width={600}
        height={600}
        className="relative!"
    />
    <p className="post-content font-light mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        auctor, turpis vitae efficitur porta, turpis.
    </p>
</div>
};

export default PostContent;