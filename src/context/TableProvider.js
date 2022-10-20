import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [todosFiltros, setTodosFiltros] = useState([]);

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
  const selectColumn = ({ target }) => setColumn(target.value);
  const selectComparison = ({ target }) => setComparison(target.value);
  const inputValueFilter = ({ target }) => setValueFilter(target.value);

  const value = useMemo(
    () => ({
      planets,
      inputFilter,
      column,
      comparison,
      valueFilter,
      todosFiltros,
      setPlanets,
      setTodosFiltros,
      filtrar,
      selectColumn,
      selectComparison,
      inputValueFilter,
    }),
    [planets, inputFilter, column, comparison, valueFilter, todosFiltros],
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
