import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../components/Counter/Counter";

describe("Counter component", () => {
  describe("Rendering", () => {
    test("renders without crashing", () => { render(<Counter />); expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument(); });
    test("displays initial value of 0 by default", () => { render(<Counter />); expect(screen.getByText("0")).toBeInTheDocument(); });
    test("displays custom initial value", () => { render(<Counter initialValue={10} />); expect(screen.getByText("10")).toBeInTheDocument(); });
    test("displays custom label", () => { render(<Counter label="Score" />); expect(screen.getByText("Score")).toBeInTheDocument(); });
    test("renders increment and decrement buttons", () => {
      render(<Counter />);
      expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Decrement" })).toBeInTheDocument();
    });
    test("renders reset button", () => { render(<Counter />); expect(screen.getByRole("button", { name: "Reset counter" })).toBeInTheDocument(); });
  });
  describe("Interaction - Increment", () => {
    test("increments from 0 to 1 on click", async () => {
      const user = userEvent.setup(); render(<Counter />);
      expect(screen.getByText("0")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: "Increment" }));
      expect(screen.getByText("1")).toBeInTheDocument();
    });
    test("increments multiple times", async () => {
      const user = userEvent.setup(); render(<Counter />);
      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Increment" }));
      expect(screen.getByText("3")).toBeInTheDocument();
    });
    test("increments by custom step", async () => {
      const user = userEvent.setup(); render(<Counter step={5} />);
      await user.click(screen.getByRole("button", { name: "Increment" }));
      expect(screen.getByText("5")).toBeInTheDocument();
    });
    test("does not exceed max value", async () => {
      const user = userEvent.setup(); render(<Counter initialValue={9} max={10} />);
      await user.click(screen.getByRole("button", { name: "Increment" }));
      expect(screen.getByText("10")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Increment" })).toBeDisabled();
    });
    test("disables increment when at max", () => { render(<Counter initialValue={10} max={10} />); expect(screen.getByRole("button", { name: "Increment" })).toBeDisabled(); });
  });
  describe("Interaction - Decrement", () => {
    test("decrements count by 1 on click", async () => {
      const user = userEvent.setup(); render(<Counter initialValue={5} />);
      await user.click(screen.getByRole("button", { name: "Decrement" }));
      expect(screen.getByText("4")).toBeInTheDocument();
    });
    test("does not go below min value", async () => {
      const user = userEvent.setup(); render(<Counter initialValue={1} min={0} />);
      await user.click(screen.getByRole("button", { name: "Decrement" }));
      expect(screen.getByText("0")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Decrement" })).toBeDisabled();
    });
    test("disables decrement when at min", () => { render(<Counter initialValue={0} min={0} />); expect(screen.getByRole("button", { name: "Decrement" })).toBeDisabled(); });
  });
  describe("Interaction - Reset", () => {
    test("resets to initial value after incrementing", async () => {
      const user = userEvent.setup(); render(<Counter initialValue={0} />);
      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Increment" }));
      expect(screen.getByText("2")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: "Reset counter" }));
      expect(screen.getByText("0")).toBeInTheDocument();
    });
    test("resets to custom initial value", async () => {
      const user = userEvent.setup(); render(<Counter initialValue={10} />);
      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Reset counter" }));
      expect(screen.getByText("10")).toBeInTheDocument();
    });
  });
});
