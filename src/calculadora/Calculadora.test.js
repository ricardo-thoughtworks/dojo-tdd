import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculadora from './Calculadora';

describe('Calculadora', () => {

  beforeEach(() => {
    render(<Calculadora />);
  })

  test('should render title', () => {
    const title = screen.getByRole("heading", { name: "Calculadora" });
    expect(title).toBeInTheDocument();
  });

  test('should render input for first number', () => {
    const firstInput = screen.getByLabelText("First number:")
    expect(firstInput).toBeInTheDocument()
  });

  test('should render input for second number', () => {
    const secondInput = screen.getByLabelText("Second number:")
    expect(secondInput).toBeInTheDocument()
  });

  test('should render input for result', () => {
    const resultInput = screen.getByLabelText("Result:")
    expect(resultInput).toBeInTheDocument()
    expect(resultInput).toHaveProperty("readOnly", true)
  });

  test('should render plus button', () => {
    const button = screen.getByRole("button", { name: "+" })
    expect(button).toBeInTheDocument()
  });

  test('should return sum when plus button is clicked', () => {
    const firstInput = screen.getByLabelText("First number:")
    const secondInput = screen.getByLabelText("Second number:")
    
    const button = screen.getByRole("button", { name: "+" })

    userEvent.type(firstInput,"1")
    userEvent.type(secondInput, "2")
    
    userEvent.click(button)

    const result = screen.getByLabelText("Result:")

    expect(result.value).toBe("3")
  });
});

