import React, { useState, useEffect, useRef } from "react";
import Input from "../shared/components/Input";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../shared/hooks/useDebounce";
import styled from "styled-components";
import DataList from "../shared/components/DataList";
import SearchQueryList from "./SearchQueryList";

const SearchContainer = styled.div`
  width: "100%";
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

const SearchForm = ({
  handleSearch,
  placeholder,
  defaultValue = "",
  searchQueries,
}) => {
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(
    searchParams.get("search") || defaultValue
  );
  const debounceValue = useDebounce(query, 500);

  const handleOnChange = (e) => {
    const query = e.target.value;

    setQueryParam(query);
    setQuery(query);
  };

  const handleOnClick = (name) => {
    setQueryParam(name);
    setQuery(name);
  };

  function setQueryParam(query) {
    if (query.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({ search: query });
    }
  }

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

      {searchQueries && (
        <>
          <DataList id="queries_list" list={searchQueries} />
          <SearchQueryList
            selectedQuery={query}
            searchQueries={searchQueries}
            onClick={handleOnClick}
          />
        </>
      )}
    </SearchContainer>
  );
};

export default SearchForm;
