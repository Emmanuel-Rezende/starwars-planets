import React from 'react';
import './App.css';
import TableProvider from './context/TableProvider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <TableProvider>
      <span>Hello, App!</span>
      <NameFilter />
      <Table />
    </TableProvider>
  );
}
// começando
export default App;
