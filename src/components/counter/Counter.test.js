import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("counter test", () => {
  test("count must be 0", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");

    expect(count).toHaveTextContent(0);
  });

  test("increase button", () => {
    render(<Counter />);
    const count = screen.getByTestId("count");

    const btn = screen.getByRole("button", { name: "Increase" });

    fireEvent.click(btn);

    expect(count).toHaveTextContent(1);

    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(count).toHaveTextContent(3);
  });

  test("decrease button", () => {
    render(<Counter />);
    const count = screen.getByTestId("count");

    const btn = screen.getByRole("button", { name: "Decrease" });

    fireEvent.click(btn);

    expect(count).toHaveTextContent(0);

    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(count).toHaveTextContent(0);
  });
});
