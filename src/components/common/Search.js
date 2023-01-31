import React from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input className="sbox"
        placeholder="What Are You Looking For?"
        onChange={(event) =>dispatch({type: "products/setSearchQuery",payload: event.target.value,})}/>
    </div>
  );
};

export default Search;
