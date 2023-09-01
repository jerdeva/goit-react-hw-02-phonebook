import React from 'react';

export const FilterForm = ({filter, onSearch}) =>
{
    return (
      <div>
        <label htmlFor="filter">
          Find contacts by name
          <input
            name="filter"
            type="text"
            placeholder="Enter name"
            value={filter}
            onChange={evt => onSearch(evt.target.value)}
          />
        </label>
      </div>
    );
}