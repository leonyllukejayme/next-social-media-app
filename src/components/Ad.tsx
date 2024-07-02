import Image from "next/image";

const Ad = ({size}:{size: 'sm' | 'md' | 'lg'}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src='/more.png' alt="" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2":"gap-4"}`}>
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image src='https://img.freepik.com/free-photo/pretty-young-woman-with-red-lips-hat_23-2148418680.jpg?t=st=1719901060~exp=1719904660~hmac=99f04b02f064ae32367de0f04bf80378b757375a760e56e23e3c865c79d827f0&w=740' alt='' fill className="rounded-lg object-cover" />
        </div>

        <div className="flex items-center gap-4">
        <Image src='https://img.freepik.com/free-photo/pretty-young-woman-with-red-lips-hat_23-2148418680.jpg?t=st=1719901060~exp=1719904660~hmac=99f04b02f064ae32367de0f04bf80378b757375a760e56e23e3c865c79d827f0&w=740' alt='' width={24}
        height={24} className="rounded-lg object-cover" />
        <span className="text-blue-500 font-medium">Ad Title Here...</span>
        </div>
          <p className={size === "sm" ? "text-xs" : "text-sm"}>
            {size ==="sm" ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit." : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum, eligendi tenetur debitis deleniti quaerat modi enim et non veniam?"}
          </p>
          <button className="bg-gray-200 text-gray-500 p-2 rounded-lg">Learn More</button>
      </div>
    </div>
  )
};

export default Ad;
