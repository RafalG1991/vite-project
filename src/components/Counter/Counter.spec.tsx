import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Counter} from "./Counter.tsx";

describe('Counter', () => {
  it('initial value should be rendered', () => {
    render(<Counter />);
    const counterElement = screen.getAllByTestId('counter-value');

    expect(counterElement).toBeInTheDocument();
  })
})