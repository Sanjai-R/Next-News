import React from "react";
import Thumbnail from "./Thumbnail"
function Results({ results }) {
 
  return (
    <div className="px-3  my-10 justify-between sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result, i) => (
        <Thumbnail key={i} result={result} />
      ))}
    </div>
  );
}

export default Results;
