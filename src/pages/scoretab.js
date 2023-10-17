import React from "react";
//import { useRouter } from "next/router";
import Table from "@/components/table";
export default function scoretab() {
//  const router = useRouter()
 // const formData = router.query;

 // console.log(formData);
  const handlesubmit = (e) => {};
  const handleInputChange = (e) => {};
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-18 lg:px-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-8 text- text-3xl font-bold leading-9 tracking-tight text-gray-500">
            Score Card
          </h2>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-m md:flex-row">
        <div className="flex flex-col center-start p-2">
          <h5 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50">
            Score Card
          </h5>
          <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-100">
            0 - 0 (0.0)
          </p>
        </div>
      
        {/* Score table */}
        <div className="flex flex-col overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {" "}
              <Table />
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {" "}
            This Over
            </div>
          </div>
        </div>
       </div>
       
    </>
  );
}
