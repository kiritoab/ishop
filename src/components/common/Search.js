import React from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        // style={{ paddingBottom: "20" }}
        placeholder="Search..."
        onChange={(event) =>
          dispatch({
            type: "products/setSearchQuery",
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default Search;
