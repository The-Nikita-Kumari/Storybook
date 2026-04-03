import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Input from "../components/Input/Input";

describe("Input component", () => {
  describe("Rendering", () => {
    test("renders without crashing", () => { render(<Input name="t" />); expect(screen.getByRole("textbox")).toBeInTheDocument(); });
    test("renders with label text", () => { render(<Input label="Username" name="u" />); expect(screen.getByLabelText("Username")).toBeInTheDocument(); });
    test("renders placeholder text", () => { render(<Input name="e" placeholder="Enter email" />); expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument(); });
    test("renders error message", () => { render(<Input name="e" error="Email is invalid" />); expect(screen.getByRole("alert")).toHaveTextContent("Email is invalid"); });
    test("renders helper text when no error", () => { render(<Input name="p" helperText="Min 6 chars" />); expect(screen.getByText("Min 6 chars")).toBeInTheDocument(); });
    test("does not render helper text when error present", () => { render(<Input name="p" error="Required" helperText="Min 6 chars" />); expect(screen.queryByText("Min 6 chars")).not.toBeInTheDocument(); });
    test("renders disabled input", () => { render(<Input name="f" disabled />); expect(screen.getByRole("textbox")).toBeDisabled(); });
    test("sets aria-invalid when error provided", () => { render(<Input name="f" error="Err!" />); expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true"); });
    test("aria-invalid is false when no error", () => { render(<Input name="f" />); expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "false"); });
  });
  describe("Interaction", () => {
    test("updates value when user types", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<Input name="s" value="" onChange={fn} />);
      await user.type(screen.getByRole("textbox"), "hello"); expect(fn).toHaveBeenCalled();
    });
    test("displays typed value via controlled input", async () => {
      const user = userEvent.setup();
      const W = () => { const [v,setV] = require("react").useState(""); return <Input name="t" value={v} onChange={e => setV(e.target.value)} />; };
      render(<W />);
      await user.type(screen.getByRole("textbox"), "Testing 123");
      expect(screen.getByRole("textbox")).toHaveValue("Testing 123");
    });
    test("clears value when cleared", async () => {
      const user = userEvent.setup();
      const W = () => { const [v,setV] = require("react").useState("initial"); return <Input name="t" value={v} onChange={e => setV(e.target.value)} />; };
      render(<W />);
      await user.clear(screen.getByRole("textbox"));
      expect(screen.getByRole("textbox")).toHaveValue("");
    });
  });
});
