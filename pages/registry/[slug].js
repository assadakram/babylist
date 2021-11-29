import { Layout } from "../../components/layout/Layout";
const Catageory = () => {
	return (
		<>
		<Layout>
			<div>
			<div className="flex flex-col place-items-center text-center ">
      <div className="py-14">
        <h2 className=" font-bold text-3xl">
		The road ahead is filled with adventure. How will yours begin?
        </h2>
      </div>
        <div className="flex flex-row gap-10 mx-36 my-8">
          <div className="bg-white flex flex-col justify-center place-items-center  w-60 h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
            <img src="/pregnancy.svg" alt=""/> 
            <label className=" font-semibold">Pregnancy</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-60 h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg ">
		   <img src="/adoption.svg" alt=""/> 
            <label className=" font-semibold">Adoption</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-60 h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
		  <img src="/surrogacy.svg" alt=""/> 
            <label className="font-semibold">Surrogacy</label>
          </div>
		  <div className="bg-white flex flex-col justify-center place-items-center  w-60 h-60 text-center rounded-lg border border-gray-300 cursor-pointer transition duration-300 hover:bg-gray-50 shadow-lg">
		  <img src="/stilltrying.svg" alt=""/> 
            <label className=" font-semibold">Still trying</label>
          </div>
        </div>
      </div>
    </div>
		</Layout>	
		</>
	)
}

export default Catageory;
