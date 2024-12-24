import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {Counter} from "./Counter.tsx";

const fireEvent = userEvent.setup();

describe('Counter', () => {
  it('initial value should be rendered', () => {
    render(<Counter />);
    const counterElement = screen.getAllByTestId('counter-value');

    expect(counterElement).toBeInTheDocument();
  })
  it('should increment the counter after clicking the button', async () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter-value');
    const buttonElement = screen.getByTestId('counter-button');

    await fireEvent.click(buttonElement);

    expect(counterElement).toHaveTextContent('1');
  })
})