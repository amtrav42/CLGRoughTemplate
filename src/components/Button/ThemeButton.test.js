import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("Toggle dark/ light theme when button is clicked", () => {
  render(<App />);
  const button = screen.getByText("Switch to Dark Mode");

  userEvent.click(button);
  expect(screen.getByText("Switch to Light Mode")).toBeDefined();
});
