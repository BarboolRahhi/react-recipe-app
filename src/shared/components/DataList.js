import React from "react";

const DataList = ({ list, id }) => {
  return (
    <datalist id={id}>
      {list.map((query, index) => (
        <option key={`${index}-${query}`} value={query}>
          {query}
        </option>
      ))}
    </datalist>
  );
};

export default DataList;
