import Image from "next/image"



const Navbar = () => {

  return (
    <div className="flex items-center justify-between p-4">
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">

            <Image 
                src='/search.png'
                width={14}
                height={14}
                alt="search"
            />
            <input 
                className="w-[200px] bg-transparent p-2 outline-none"
                placeholder="Search..."
                type="text"
            />
        </div>

        <div className="flex items-center gap-6 justify-end w-full">

            <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">

                <Image 

                    src={'/message.png'}
                    alt="message"
                    width={20}
                    height={20}
                />

            </div>
            <div className="bg-white relative rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">

                <Image 

                    src={'/announcement.png'}
                    alt="announcement"
                    width={20}
                    height={20}
                />

                <div className="absolute -top-3 -right-3 flex rounded-full text-xs w-5 h-5 items-center justify-center bg-purple-500 text-white">
                    1
                </div>

            </div>

            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John doe</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>

            <div>

                <Image 
                    src={'/avatar.png'}
                    alt=""

                    width={36}
                    height={36}
                    className="rounded-full"
                />
            </div>

        </div>
    </div>
  )

}

export default Navbar