import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";

const Header = () => {
  const [title, setTitle] = useState("Workout");
  const [edit, setEdit] = useState(false);
  return (
    <header className="flex justify-between p-2 px-5 sticky top-0 z-20 rounded-b-lg shadow-md bg-white min-h-14 items-center">
      <div className="flex gap-2 justify-center items-center">
        <FaArrowLeft />
        {edit ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none border-b border-gray-400 px-2 outline-none w-fit"
          />
        ) : (
          <span>{title}</span>
        )}
        {edit ? (
          <span className="cursor-pointer" onClick={() => setEdit(!edit)}>
            Save
          </span>
        ) : (
          <FiEdit2 className="cursor-pointer" onClick={() => setEdit(!edit)} />
        )}
      </div>
      <button className="rounded-full p-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        Save Workout
      </button>
    </header>
  );
};

export default Header;
