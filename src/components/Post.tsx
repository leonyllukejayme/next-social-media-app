import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-lg gap-12">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                <span className="font-medium">Beavis</span>
                </div>
                <Image src='/more.png' alt="" width={16} height={16} className="cursor-pointer" />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src='https://img.freepik.com/free-vector/flat-nostalgic-90-s-background_23-2149048722.jpg?t=st=1719404886~exp=1719408486~hmac=41608aecaed34462311534841b54c07a12849dacb08251cc98ccc5832e26a901&w=740' alt="" fill className="object-fill rounded-md absolute" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus eaque dolorum ratione repellat id ullam possimus itaque natus veniam quaerat modi quam, laudantium optio nihil perspiciatis, voluptatem distinctio officia!</p>
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
                        <span className="text-gray-500">10 <span className="hidden md:inline">Shares</span></span>
                    </div>
                </div>
            </div>
            {/* COMMENT */}
            <Comments />
        </div>
    );
}

export default Post;