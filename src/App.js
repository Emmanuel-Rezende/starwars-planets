import React from 'react';
import './App.css';
import TableProvider from './context/TableProvider';
import Table from './components/Table';

function App() {
  return (
    <TableProvider>
      <span>Hello, App!</span>
      <Table />
    </TableProvider>
  );
}
// começando
export default App;
