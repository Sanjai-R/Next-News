import React from "react";
import Link from "next/link";
function Thumbnail({ result }) {
  return (
    <div className="relative bg-grey mx-6 my-4 rounded-lg ">
      <img
        className="w-full h-1/3 object-cover rounded-t-lg"
        src={result.urlToImage}
        alt={result.title}
        
      />
      <div className="p-2 h-200">
        <h2 className="text-xl font-semibold">{result.title}</h2>
        <p className="text-desc max-w-md">{result.description}</p>
      </div>
      <div className="xl:mt-4">
        <button className=" m-4 bg-indigo border-none  px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 xl:absolute right-10 bottom-5 xl:m-0">
          <Link href={`${result.url}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
}

export default Thumbnail;
