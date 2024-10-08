import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const ProfileCard = async () => {
  const {userId} = auth();

  if(!userId) return null;

  const user = await prisma.user.findFirst({
    where:{
      id:userId,
    },
    include:{
      _count:{
        select:{
          followers:true
        },
      },
    },
  });

  // console.log(user);

  if(!user) return null;

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
      <div className="h-20 relative">
        <Image src={user.cover || "/noCover.png"} alt='' fill className="rounded-md object-cover"/>
        <Image src={user.avatar || "/noAvatar.png"} alt='' width={40} height={40} className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white"/>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{(user.name && user.username) ? user.name + " " + user.surname : user.username}</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
            </div>
            <span className="text-xs text-gray-500">{user._count.followers} {user._count.followers === 1  ? "Follower" : "Followers"}</span>
        </div>
        <a href={`/profile/${user.username}`} className="bg-blue-500 text-white text-xs p-2 rounded-md hover:bg-blue-400">My Profile</a>
      </div>
    </div>
  )
};

export default ProfileCard;
