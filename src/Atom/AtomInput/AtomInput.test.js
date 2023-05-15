import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AtomInput from './AtomInput';
import '@testing-library/jest-dom'

describe('AtomInput', () => {
  it('renders with default props', () => {
    const { getByPlaceholderText } = render(<AtomInput />);
    const inputElement = getByPlaceholderText('Texte');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).not.toHaveClass('invalid-input');
    expect(inputElement).not.toHaveClass('valid-input');
    expect(inputElement).toHaveClass('default-input');
    expect(inputElement).toHaveClass('default-medium-input');
  });

  it('renders with custom props', () => {
    const { getByPlaceholderText } = render(
      <AtomInput
        placeholder="Custom placeholder"
        size="small"
        value="Custom value"
        onChange={() => {}}
        isInvalid
      />
    );
    const inputElement = getByPlaceholderText('Custom placeholder');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).toHaveClass('invalid-input');
    expect(inputElement).not.toHaveClass('valid-input');
    expect(inputElement).toHaveClass('default-input');
    expect(inputElement).toHaveClass('default-small-input');
    expect(inputElement).toHaveValue('Custom value');
    // fireEvent.change(inputElement, { target: { value: 'New value' } });
    // expect(inputElement).toHaveValue('New value');
  });

  it('renders as password input', () => {
    const { getByPlaceholderText } = render(
      <AtomInput placeholder="Password" password />
    );
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).not.toHaveClass('invalid-input');
    expect(inputElement).not.toHaveClass('valid-input');
    expect(inputElement).toHaveClass('default-input');
    expect(inputElement).toHaveClass('default-medium-input');
    expect(inputElement.type).toEqual('password');
  });
});
