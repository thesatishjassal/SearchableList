import React, { useState, useEffect } from 'react';
import countries from './countries.json';

const SearchableList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className='form-control'
      />
      <ul className='contries__list'>
      {filteredCountries.length > 0 ? (
          filteredCountries.map(country => (
            <li className="list-items" key={country.id}>{country.name}</li>
          ))
        ) : (
          <li>Country not found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchableList;
