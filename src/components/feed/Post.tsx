import { Post as Posts, User } from "@prisma/client";
import Image from "next/image";
import Comments from "./Comments";
import PostInteraction from "./PostInteraction";

type PostType = Posts & {user:User} & {likes:[{userId:string}]} & {_count:{comments:number}}
const Post = ({post}:{post:PostType}) => {
    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-lg gap-6">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <a href={`/profile/${post.user.username}`}>
                <Image src={post.user.avatar || "/noAvatar.png"} alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                </a>
                <a href={`/profile/${post.user.username}`}>
                    <span className="font-medium">{
                    (post.user.name && post.user.surname) ? `${post.user.name} ${post.user.surname}` : post.user.username
                    }</span>
                </a>
               
                </div>
                <Image src='/more.png' alt="" width={16} height={16} className="cursor-pointer" />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <p>{post.desc}</p>
                {post.img && <div className="w-full min-h-96 relative">
                <Image src={post.img} alt="" fill className="object-fill rounded-md absolute" />
                </div>}
            </div>
            {/* INTERCTION */}
            <PostInteraction postId={post.id} likes={post.likes.map(like => like.userId)} commentNumber={post._count.comments}/>
            {/* COMMENT */}
            <Comments />
        </div>
    );
}

export default Post;