import Image from "next/image";
import Comments from "./Comments";
import { Post as Posts, User } from "@prisma/client";

type PostType = Posts & {user:User} & {likes:[{userId:string}]} & {_count:{comments:number}}
const Post = ({post}:{post:PostType}) => {
    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-lg gap-6">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <Image src={post.user.avatar || "/noAvatar.png"} alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                <span className="font-medium">{
                    (post.user.name && post.user.surname) ? `${post.user.name} ${post.user.surname}` : post.user.username
                    }</span>
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
            <div className="flex items-center justify-between text-sm mt-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src='/like.png' alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">100k <span className="hidden md:inline">Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src='/comment.png' alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">100 <span className="hidden md:inline">Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src='/share.png' alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500"><span className="hidden md:inline">Share</span></span>
                    </div>
                </div>
            </div>
            {/* COMMENT */}
            <Comments />
        </div>
    );
}

export default Post;