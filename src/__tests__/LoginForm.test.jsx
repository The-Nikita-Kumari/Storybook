import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginForm from "../components/LoginForm/LoginForm";

describe("LoginForm component", () => {
  describe("Rendering", () => {
    test("renders without crashing", () => { render(<LoginForm />); expect(screen.getByRole("form", { name: "Login form" })).toBeInTheDocument(); });
    test("renders Sign In heading", () => { render(<LoginForm />); expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument(); });
    test("renders email and password inputs", () => {
      render(<LoginForm />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
    test("renders submit button", () => { render(<LoginForm />); expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument(); });
  });
  describe("Interaction - Typing", () => {
    test("updates email field when user types", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      const input = screen.getByLabelText(/email/i);
      await user.type(input, "test@example.com");
      expect(input).toHaveValue("test@example.com");
    });
    test("updates password field when user types", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      const input = screen.getByLabelText(/password/i);
      await user.type(input, "secret123");
      expect(input).toHaveValue("secret123");
    });
  });
  describe("Interaction - Validation", () => {
    test("shows error when submitting empty form", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
    test("shows error for invalid email format", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.type(screen.getByLabelText(/email/i), "notanemail");
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();
    });
    test("shows error for short password", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.type(screen.getByLabelText(/email/i), "user@test.com");
      await user.type(screen.getByLabelText(/password/i), "123");
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Password must be at least 6 characters")).toBeInTheDocument();
    });
    test("clears field error when user starts typing again", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      await user.type(screen.getByLabelText(/email/i), "a");
      expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
    });
  });
  describe("Interaction - Successful Submit", () => {
    test("calls onSubmit with form data on valid submission", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<LoginForm onSubmit={fn} />);
      await user.type(screen.getByLabelText(/email/i), "user@example.com");
      await user.type(screen.getByLabelText(/password/i), "password123");
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(fn).toHaveBeenCalledWith({ email: "user@example.com", password: "password123" });
    });
    test("shows success message after valid submission", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.type(screen.getByLabelText(/email/i), "user@example.com");
      await user.type(screen.getByLabelText(/password/i), "password123");
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Welcome back!")).toBeInTheDocument();
    });
    test("sign out button resets the form", async () => {
      const user = userEvent.setup(); render(<LoginForm />);
      await user.type(screen.getByLabelText(/email/i), "user@example.com");
      await user.type(screen.getByLabelText(/password/i), "password123");
      await user.click(screen.getByRole("button", { name: /sign in/i }));
      expect(screen.getByText("Welcome back!")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: /sign out/i }));
      expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
    });
  });
});
