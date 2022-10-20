import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

export default function NameFilter() {
  const { inputFilter, filtrar } = useContext(TableContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ filtrar }
      value={ inputFilter }
    />
  );
}
