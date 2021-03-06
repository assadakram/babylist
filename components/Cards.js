import Link from "next/link";
import Image from "next/image";

export function Cards() {
  return (
    <div className="flex flex-col place-items-center text-center mt-6">
      <div className="py-14">
        <h2 className=" font-bold text-3xl md:text-5xl">
          OK, let's set up your registry.
        </h2>
      </div>
      <div className="bg-gray-50 py-5 animate-fadeIn">
        <label className=" text-sm font-medium  font-Josefin uppercase tracking-widest">
          What's the occasion?
        </label>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-8 md:mx-36">
          <Link href={`/registry/wedding`}>
            <a>
              <div className="bg-white flex flex-col justify-center place-items-center w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-100 shadow-lg  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <label className=" font-semibold">Wedding</label>
              </div>
            </a>
          </Link>
          <Link href={`/registry/baby`}>
            <a>
              <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-700 hover:bg-gray-100 shadow-lg ">
                <div className="w-32 h-32">
                  <Image
                    src="/shower.png"
                    width="128px"
                    height="170px"
                    alt="Shower"
                  />
                </div>
                <label className=" font-Josefin font-semibold">Baby</label>
              </div>
            </a>
          </Link>
          <Link href={`/registry/other`}>
            <a>
              <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-700 hover:bg-gray-100 shadow-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
                <label className=" font-Josefin font-semibold">Other</label>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
