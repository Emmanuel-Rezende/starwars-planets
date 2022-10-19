import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const chamaApi = async () => {
    const endpoint = 'https://swapi.dev/api/planets';
    const apiFetch = await fetch(endpoint);
    const json = await apiFetch.json();
    setPlanets(json.results);
  };
  useEffect(() => {
    chamaApi();
  }, []);
  const planetas = useMemo(() => ({ planets }), [planets]); // retorna um valor memorizado
  return (
    <TableContext.Provider value={ planetas }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
