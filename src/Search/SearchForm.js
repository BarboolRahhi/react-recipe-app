import React, { useState, useEffect, useRef } from "react";
import Input from "../shared/components/Input";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../shared/hooks/useDebounce";
import styled from "styled-components";
import { searchQueries } from "../shared/RecipeQueryList";
import DataList from "../shared/components/DataList";

const SearchContainer = styled.div`
  width: "100%";
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

const SearchForm = ({ handleSearch, placeholder }) => {
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const debounceValue = useDebounce(query, 1000);

  const handleOnChange = (e) => {
    const query = e.target.value;

    if (query.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ search: query });
    }
    setQuery(query);
  };

  useEffect(() => {
    if (debounceValue.trim() !== "") {
      handleSearch(debounceValue);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  }, [debounceValue]);

  return (
    <SearchContainer>
      <Input
        ref={inputRef}
        style={{ width: "100%" }}
        value={query}
        onChange={handleOnChange}
        placeholder={placeholder}
        type="text"
        list="queries_list"
      />
      <DataList id="queries_list" list={searchQueries} />
    </SearchContainer>
  );
};

export default SearchForm;
