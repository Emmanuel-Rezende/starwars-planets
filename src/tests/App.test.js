import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});

test('testa se renderiza os select, input e button', () => {
  render(<App />);
  const column = screen.getByTestId('column-filter');
  const comparison = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const button = screen.getByTestId('button-filter');
  const nameFilter = screen.getByTestId('name-filter');

  expect(column).toBeInTheDocument();
  expect(comparison).toBeInTheDocument();
  expect(valueFilter).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(nameFilter).toBeInTheDocument();
});

test('testando o filtro pelo nome', async () => {
  render(<App />);
  const nameFilter = screen.getByTestId('name-filter');

  userEvent.type(nameFilter, 'ooi');

  const planeta = await screen.findByText('Tatooine', {}, { timeout: 5000 });

  expect(planeta).toBeInTheDocument();
});

test('testando o filtro', async () => {
  render(<App />);
  const column = screen.getByTestId('column-filter');
  const comparison = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const button = screen.getByTestId('button-filter');

  userEvent.selectOptions(column, 'diameter');
  userEvent.selectOptions(comparison, 'menor que');
  userEvent.type(valueFilter, '5000');
  userEvent.click(button);

  const planeta = await screen.findByText('Endor', {}, { timeout: 5000 });
  const filtro = screen.getByTestId('filtro', {}, { timeout: 5000 });

  expect(filtro).toBeInTheDocument();
  expect(planeta).toBeInTheDocument();
});
