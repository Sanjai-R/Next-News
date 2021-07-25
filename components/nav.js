import requests from "../utils/request";
import React from "react";
import {useRouter} from "next/router"

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative  my-8">
      <div className="flex px-10 sm:px-20  text-xl  space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <button
            key={key}
            className="bg-indigo border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            {" "}
            <h4
              onClick={() => {
                router.push(`/?genre=${key}`);
              }}
              className="cursor-pointer font-bold"
            >
              {title}
            </h4>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
