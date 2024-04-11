import React from "react";
import Button from "../shared/components/Button";
import styled from "styled-components";

const SearchQueryListWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
`;

const SearchQueryList = ({ selectedQuery, searchQueries, onClick }) => {
  return (
    <SearchQueryListWrapper>
      {searchQueries.map((name) => (
        <Button
          key={name}
          isSelected={name === selectedQuery}
          style={{ textWrap: "nowrap" }}
          onClick={() => onClick(name)}
        >
          {name}
        </Button>
      ))}
    </SearchQueryListWrapper>
  );
};

export default SearchQueryList;
