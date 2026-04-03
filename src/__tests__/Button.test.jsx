import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../components/Button/Button";

describe("Button component", () => {
  describe("Rendering", () => {
    test("renders without crashing", () => { render(<Button>Click me</Button>); expect(screen.getByRole("button")).toBeInTheDocument(); });
    test("displays correct text passed via props", () => { render(<Button>Submit</Button>); expect(screen.getByRole("button")).toHaveTextContent("Submit"); });
    test("renders with primary variant by default", () => { render(<Button>Primary</Button>); expect(screen.getByRole("button")).toHaveAttribute("data-variant", "primary"); });
    test("renders secondary variant correctly", () => { render(<Button variant="secondary">Secondary</Button>); expect(screen.getByRole("button")).toHaveAttribute("data-variant", "secondary"); });
    test("renders danger variant correctly", () => { render(<Button variant="danger">Delete</Button>); expect(screen.getByRole("button")).toHaveAttribute("data-variant", "danger"); });
    test("renders disabled state", () => { render(<Button disabled>Disabled</Button>); expect(screen.getByRole("button")).toBeDisabled(); });
    test("renders with correct aria-label", () => { render(<Button aria-label="close dialog">X</Button>); expect(screen.getByRole("button", { name: "close dialog" })).toBeInTheDocument(); });
    test("renders with fullWidth attribute when prop is set", () => { render(<Button fullWidth>Full</Button>); expect(screen.getByRole("button")).toHaveAttribute("data-fullwidth", "true"); });
  });
  describe("Interaction", () => {
    test("calls onClick when clicked", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<Button onClick={fn}>Click</Button>);
      await user.click(screen.getByRole("button")); expect(fn).toHaveBeenCalledTimes(1);
    });
    test("does not call onClick when disabled", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<Button disabled onClick={fn}>Disabled</Button>);
      await user.click(screen.getByRole("button")); expect(fn).not.toHaveBeenCalled();
    });
    test("can be clicked multiple times", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<Button onClick={fn}>Multi</Button>);
      await user.click(screen.getByRole("button"));
      await user.click(screen.getByRole("button"));
      await user.click(screen.getByRole("button"));
      expect(fn).toHaveBeenCalledTimes(3);
    });
  });
});
