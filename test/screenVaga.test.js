import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import VagaScreen from '../Screens/Vaga';


test('renders VagaScreen component', () => {
  render(<VagaScreen/>);
});

test('renders Vaga components', () => {
    const { getByText } = render(<VagaScreen />);
  
    expect(getByText('V1')).toBeInTheDocument();
    expect(getByText('V7')).toBeInTheDocument();
  });

  test('handles Vaga click', () => {
    const { getByText } = render(<VagaScreen />);
  
    const vaga1 = getByText('V1');
    fireEvent.click(vaga1);
  });