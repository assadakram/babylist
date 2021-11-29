import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="inline-flex w-full h-16 justify-between bg-white">
        <div className="flex ml-6 items-center ">
          <Image src="/ER-logo.png" width="178px" height="30px" alt="" />
        </div>
        <div>
          <a className=" text-sm hover:border-b-2 transition duration-500 hover:border-gray-400 h-full py-5 font-semibold mr-14 font-Josefin hidden md:block cursor-pointer  uppercase  tracking-widest ">
            Log in
          </a>
        </div>
      </div>
    </>
  );
};
