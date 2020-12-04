import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

const SearchForm = ({handleSearch}) => {
  const [query, setQuery] = useState('');

  const handleOnChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => handleSearch(query ? query : 'pizza'), 1000)
    return () => clearTimeout(timeOut)
  }, [query])

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input
        style={{width: '100%'}}
        value={query}
        onChange={handleOnChange}
        placeholder='Search Your Fav Recipe...'
        type='text'
      />
      <Button onClick={() => handleSearch(query)}>Search</Button>
    </div>
  );
};

export default SearchForm;
