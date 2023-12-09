import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EntradaFormularioClientes from '../Screens/Entrada_Cliente';

describe('EntradaFormularioClientes Component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<EntradaFormularioClientes />);
    
    const nomeInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('Email');
    const telefoneInput = getByPlaceholderText('Telefone');
    const cpfInput = getByPlaceholderText('CPF');
    const cadastrarButton = getByTestId('cadastrar-button');

    expect(nomeInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(telefoneInput).toBeTruthy();
    expect(cpfInput).toBeTruthy();
    expect(cadastrarButton).toBeTruthy();
  });

  test('handles input changes correctly', () => {
    const { getByPlaceholderText } = render(<EntradaFormularioClientes />);

    const nomeInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('Email');
    const telefoneInput = getByPlaceholderText('Telefone');
    const cpfInput = getByPlaceholderText('CPF');

    fireEvent.changeText(nomeInput, 'joão');
    fireEvent.changeText(emailInput, 'jõao@example.com');
    fireEvent.changeText(telefoneInput, '123-456-7890');
    fireEvent.changeText(cpfInput, '123.456.789-09');

    expect(nomeInput.props.value).toBe('jõao');
    expect(emailInput.props.value).toBe('jõao@example.com');
    expect(telefoneInput.props.value).toBe('123-456-7890');
    expect(cpfInput.props.value).toBe('123.456.789-09');
  });

  test('handles button press correctly', async () => {
    const { getByPlaceholderText, getByTestId } = render(<EntradaFormularioClientes />);
    
    const nomeInput = getByPlaceholderText('Nome');
    const emailInput = getByPlaceholderText('Email');
    const telefoneInput = getByPlaceholderText('Telefone');
    const cpfInput = getByPlaceholderText('CPF');
    const cadastrarButton = getByTestId('cadastrar-button');

    fireEvent.changeText(nomeInput, 'joâo');
    fireEvent.changeText(emailInput, 'joão@example.com');
    fireEvent.changeText(telefoneInput, '123-456-7890');
    fireEvent.changeText(cpfInput, '123.456.789-09');


  });
});
