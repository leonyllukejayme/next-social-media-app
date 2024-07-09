import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
      <div className="h-20 relative">
        <Image src='https://img.freepik.com/free-vector/gradient-lo-fi-illustrations_52683-82982.jpg?t=st=1720423282~exp=1720426882~hmac=e7a7b9f4dfb95346454b367096231736e5d0eac45fce9b5f1348e85e1ed4783e&w=740' alt='' fill className="rounded-md object-cover"/>
        <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={40} height={40} className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white"/>
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Beavis</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
                <Image src='https://upload.wikimedia.org/wikipedia/en/1/1f/Beavis_BeavisandButtHead.png' alt='' width={12} height={12} className="rounded-full object-cover w-3 h-3"/>
            </div>
            <span className="text-xs text-gray-500">500k Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md hover:bg-blue-400">My Profile</button>
      </div>
    </div>
  )
};

export default ProfileCard;
