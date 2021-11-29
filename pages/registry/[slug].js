import { Layout } from "../../components/layout/Layout";
import Image from "next/image";
export function Category() {
  return (
    <Layout>
      <div className="flex flex-col place-items-center text-center ">
        <div className="py-14">
          <h2 className=" font-bold text-xl md:text-4xl mt-6">
            The road ahead is filled with adventure. <br />
            How will yours begin?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-10 my-8 md:mx-36 animate-fadeIn">
          <div className="bg-white flex flex-col justify-center place-items-center w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
            <Image src="/pregnancy.svg" alt="" width="117px" height="100px" />
            <label className=" font-semibold mt-2">Pregnancy</label>
          </div>
          <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
            <Image src="/adoption.svg" alt="" width="117px" height="100px" />
            <label className=" font-semibold mt-2">Adoption</label>
          </div>
          <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
            <Image src="/surrogacy.svg" alt="" width="117px" height="100px" />
            <label className="font-semibold mt-2">Surrogacy</label>
          </div>
          <div className="bg-white flex flex-col justify-center place-items-center  w-48 h-48 md:w-60 md:h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
            <Image src="/stilltrying.svg" alt="" width="117px" height="100px" />
            <label className=" font-semibold mt-2">Still trying</label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;
