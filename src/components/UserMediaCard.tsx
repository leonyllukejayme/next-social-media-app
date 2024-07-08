import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href='/' className="text-blue-500 text-xs">See All</Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://img.freepik.com/free-photo/bearded-man-stylish-jacket-is-posing-photographer-blue-red-lights_613910-13126.jpg?t=st=1720419827~exp=1720423427~hmac=dba06686de26a7d69d87dea5bf81b61c6769aae253169ff9bc2e32cd761961c4&w=740" alt="" fill className="object-cover rounded-md" />
        </div>
      </div>
    </div>
  )
};

export default UserMediaCard;
