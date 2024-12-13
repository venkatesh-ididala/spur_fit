import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { SlOptionsVertical } from "react-icons/sl";

const Details = ({ rightData }) => {
  return (
    <div className="grid col-span-9 rounded-md shadow-sm p-2">
      {rightData.map((item) => (
        <div className="rounded-lg bg-white my-2">
          <div className="flex justify-between p-4">
            <p>Warm Up</p>
            <SlOptionsVertical />
          </div>
          <hr className="my-1" />
          <div className="bg-fill-light flex justify-between m-2 p-2 px-4 rounded-2xl relative">
            <div className="h-6 z-10 border absolute left-0"></div>
            <div className="flex gap-3 items-center">
              <RxDragHandleDots2 />
              <span>Run</span>
            </div>
            <div className="flex gap-3 px-4 items-center">
              <span className="p-2 bg-white border rounded">2 KMS</span>
              <span className="p-2 bg-white border rounded">
                <SlOptionsVertical className="text-xl" />
              </span>
            </div>
          </div>
          <div className="mb-2 flex justify-center relative">
            <button className=" p-2 rounded-full px-4 border-purple-500 border-2 bg-white">
              Add Substep
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
