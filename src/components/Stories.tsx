import Image from "next/image";

const Stories = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll scrollbar-hide text-sm">
            <div className="flex gap-8 w-max">
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Beavis</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/7/71/Butt-head_BevisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Butt-Head</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Beavis</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/7/71/Butt-head_BevisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Butt-Head</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Beavis</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/7/71/Butt-head_BevisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Butt-Head</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Beavis</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/7/71/Butt-head_BevisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Butt-Head</span>
                </div>
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Beavis</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src='https://upload.wikimedia.org/wikipedia/en/7/71/Butt-head_BevisandButtHead.png' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">Butt-Head</span>
                </div>
            </div>
        </div>
    );
}

export default Stories;