import { Layout } from "../../components/layout/Layout";
import {Image} from "next/image"
export function Catageory() {
	return (
		<>
		<Layout>
			<div>
			<div className="flex flex-col place-items-center text-center ">
      <div className="py-14">
        <h2 className=" font-bold text-xl md:text-4xl">
		The road ahead is filled with adventure. How will yours begin?
        </h2>
      </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-8 md:mx-36 animate-fadeIn">
          <div className="bg-white flex flex-col justify-center place-items-center w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
            <Image src="/pregnancy.svg" alt=""/> 
            <label className=" font-semibold">Pregnancy</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
		   <Image src="/adoption.svg" alt=""/> 
            <label className=" font-semibold">Adoption</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
		  <Image src="/surrogacy.svg" alt=""/> 
            <label className="font-semibold">Surrogacy</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
		  <Image src="/stilltrying.svg" alt=""/> 
            <label className=" font-semibold">Still trying</label>
          </div>
        </div>
      </div>
    </div>
		</Layout>	
		</>
	)
}
