import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

export default function Filter() {
  const {
    planets,
    column,
    comparison,
    valueFilter,
    selectColumn,
    selectComparison,
    inputValueFilter,
    setPlanets,
    setTodosFiltros,
    /* todosFiltros, */
  } = useContext(TableContext);

  const botaoFiltrar = () => {
    if (comparison === 'maior que') {
      const filtro = planets.filter((elemento) => +elemento[column] > +valueFilter);
      setPlanets(filtro);
    }
    if (comparison === 'menor que') {
      const filtro = planets.filter((elemento) => +elemento[column] < +valueFilter);
      setPlanets(filtro);
    }
    if (comparison === 'igual a') {
      const filtro = planets.filter((elemento) => +elemento[column] === +valueFilter);
      setPlanets(filtro);
    }
    const filtragens = `${column} ${comparison} ${valueFilter}`;
    setTodosFiltros(filtragens);
  };
  return (
    <section>
      <div>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ selectColumn }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
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
      {/* {todosFiltros && (
        todosFiltros.map((elemento) => <h1 key={ elemento }>{ elemento }</h1>)
      )} */}
    </section>
  );
}
