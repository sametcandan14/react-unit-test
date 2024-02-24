import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./components/Button";
import SendForm from "./components/SendForm";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/unit test/i);
  expect(linkElement).toBeInTheDocument();
});

// Button Test

test("button color and text", () => {
  render(<Button />);
  const colorBtn = screen.getByRole("button", { name: "Turn Blue" });

  expect(colorBtn).toHaveStyle({ background: "red" });

  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ background: "blue" });

  expect(colorBtn).toHaveTextContent("Turn Red");
});

test("button enabled disabled according to checkbox", () => {
  render(<SendForm />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});
