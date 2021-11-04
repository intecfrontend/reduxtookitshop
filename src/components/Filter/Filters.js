import React from "react";
import Filter from "./Filter";

const Filters = () => {
  return (
    <div className="borderedContainer">
      <b>Choose category:</b>
      {["fruit", "vegetables", "all"].map(category => (
        <Filter category={category}  />
      ))}
    </div>
  );
};

export default Filters;
