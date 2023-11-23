import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilter);

  const handleChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={handleChange} value={filterContacts} />
    </>
  );
};
