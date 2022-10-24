import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparisonT, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [todosFiltros, setTodosFiltros] = useState([]);
  const [filterAtt, setFilterAtt] = useState([]);
  const [initialFilter, setInitialFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
      comparisonT,
      valueFilter,
      todosFiltros,
      filterAtt,
      initialFilter,
      setColumn,
      setFilterAtt,
      setInitialFilter,
      setPlanets,
      setTodosFiltros,
      filtrar,
      selectColumn,
      selectComparison,
      inputValueFilter,
    }),
    [planets,
      inputFilter,
      column,
      comparisonT,
      valueFilter,
      todosFiltros,
      filterAtt,
      initialFilter],
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
