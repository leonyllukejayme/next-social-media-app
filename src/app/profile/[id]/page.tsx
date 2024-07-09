import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
    {/* LEFT */}
    <div className="hidden xl:block w-[20%]"><LeftMenu type="profile"/></div>
    {/* CENTER */}
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md">
          <div className="w-full h-64 relative">
          <Image src='https://img.freepik.com/free-vector/gradient-lo-fi-illustrations_52683-82982.jpg?t=st=1720423282~exp=1720426882~hmac=e7a7b9f4dfb95346454b367096231736e5d0eac45fce9b5f1348e85e1ed4783e&w=740' alt='' fill className="rounded-md object-cover"/>
          <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={120} height={120} className="rounded-full w-32 h-32 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-4 ring-white "/>
          </div>
          <h1 className="mt-14 mb-4 text-2xl font-medium">Beavis</h1>
          <div className="flex items-center justify-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">555</span>
              <span className="font-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">500k</span>
              <span className="font-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1k</span>
              <span className="font-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    {/* RIGHT */}
    <div className="hidden lg:block w-[30%]"><RightMenu userId="12345677567547"/></div>
  </div>
  )
}

export default ProfilePage