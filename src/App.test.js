import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Features link", () => {
  render(<App />);
  const linkElement = screen.getByText(/unsplash/i);
  expect(linkElement).toBeInTheDocument();
});
