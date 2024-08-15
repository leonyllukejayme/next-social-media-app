import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { notFound } from "next/navigation"

const ProfilePage = async ({params}:{params:{username:string}}) => {

  const username = params.username;

  const user = await prisma.user.findFirst({
    where:{
      username,
    },
    include:{
      _count:{
        select:{
          followers:true,
          followings:true,
          posts:true,
        },
      },
    }
  })
  console.log(user);

  if(!user) return notFound();

  // user is block?

  const {userId:currentUserId} = auth();

  let isBlocked;

  if(currentUserId){
    const res = await prisma.block.findFirst({
      where:{
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if(res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if(isBlocked) return notFound();

  // --------

  return (
    <div className='flex gap-6 pt-6'>
    {/* LEFT */}
    <div className="hidden xl:block w-[20%]"><LeftMenu type="profile"/></div>
    {/* CENTER */}
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md">
          <div className="w-full h-64 relative">
          <Image src={user.cover || '/noCover.png'} alt='' fill className="rounded-md object-cover"/>
          <Image src={user.avatar || '/noAvatar.png'} alt='' width={120} height={120} className="rounded-full w-32 h-32 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-4 ring-white "/>
          </div>
          <h1 className="mt-14 mb-4 text-2xl font-medium">{(user.name && user.username) ? user.name + " " + user.surname : user.username}</h1>
          <div className="flex items-center justify-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.posts}</span>
              <span className="font-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.followers}</span>
              <span className="font-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.followings}</span>
              <span className="font-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    {/* RIGHT */}
    <div className="hidden lg:block w-[30%]"><RightMenu user={user}/></div>
  </div>
  )
}

export default ProfilePage