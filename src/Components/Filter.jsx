import React, { useRef, useEffect, useState } from "react";

function Filter(props) {
  const filterRef = useRef();
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Filter;
