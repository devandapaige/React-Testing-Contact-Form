// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import App from "./App";
//Arrange, Act, Assert
test("Make sure all input labels are mounted", async () => {
  render(<App />);
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);

  expect(firstName, lastName, email, message).toBeInTheDocument();
});
