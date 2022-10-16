import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it("render Hello component", () => {
  render(<Hello />);

  const divElement = screen.getByText(/hello/i);
  expect(divElement).toBeInTheDocument();
});
