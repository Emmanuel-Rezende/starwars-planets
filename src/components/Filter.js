import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

export default function Filter() {
  const {
    planets,
    column,
    comparisonT,
    valueFilter,
    selectColumn,
    selectComparison,
    inputValueFilter,
    setPlanets,
    setTodosFiltros,
    todosFiltros,
    setColumn,
    filterAtt,
    initialFilter,
    setFilterAtt,
    setInitialFilter,
  } = useContext(TableContext);

  const botaoFiltrar = () => {
    if (comparisonT === 'maior que') {
      const filtro = planets.filter((elemento) => +elemento[column] > +valueFilter);
      setPlanets(filtro);
    }
    if (comparisonT === 'menor que') {
      const filtro = planets.filter((elemento) => +elemento[column] < +valueFilter);
      setPlanets(filtro);
    }
    if (comparisonT === 'igual a') {
      const filtro = planets.filter((elemento) => +elemento[column] === +valueFilter);
      setPlanets(filtro);
    }
    const filtragens = [...todosFiltros, `${column} ${comparisonT} ${valueFilter}`];
    setTodosFiltros(filtragens);
    setFilterAtt([...filterAtt,
      { column, comparison: comparisonT, value: valueFilter }]);
    const teste = initialFilter.filter((elemento) => elemento !== column);
    setColumn(teste[0]);
    setInitialFilter(teste);
  };
  return (
    <section>
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ selectColumn }
        >
          {initialFilter.map((elemento) => (
            <option key={ elemento } value={ elemento }>
              {elemento}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparisonT }
          onChange={ selectComparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ valueFilter }
          onChange={ inputValueFilter }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ botaoFiltrar }
        >
          FILTRAR
        </button>

      </div>
      {todosFiltros && (
        todosFiltros.map((elemento) => (
          <h1 key={ elemento } data-testid="filtro">{ elemento }</h1>))
      )}
    </section>
  );
}
