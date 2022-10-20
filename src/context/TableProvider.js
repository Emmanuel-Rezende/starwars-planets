import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputFilter, setInputFilter] = useState('');

  const chamaApi = async () => {
    const endpoint = 'https://swapi.dev/api/planets';
    const apiFetch = await fetch(endpoint);
    const json = await apiFetch.json();
    setPlanets(json.results);
  };

  useEffect(() => {
    chamaApi();
  }, []);

  const filtrar = ({ target }) => setInputFilter(target.value);

  const value = useMemo(
    () => ({ planets, inputFilter, filtrar }),
    [planets, inputFilter],
  );
  return (
    <TableContext.Provider value={ value }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
