import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "../components/Card/Card";

describe("Card component", () => {
  describe("Rendering", () => {
    test("renders without crashing", () => { const { container } = render(<Card />); expect(container.firstChild).toBeInTheDocument(); });
    test("displays title passed via props", () => { render(<Card title="Test Title" />); expect(screen.getByText("Test Title")).toBeInTheDocument(); });
    test("displays description passed via props", () => { render(<Card description="A description." />); expect(screen.getByText("A description.")).toBeInTheDocument(); });
    test("displays badge text", () => { render(<Card badge="NEW" />); expect(screen.getByText("NEW")).toBeInTheDocument(); });
    test("renders children content", () => { render(<Card><span>Child</span></Card>); expect(screen.getByText("Child")).toBeInTheDocument(); });
    test("renders footer content", () => { render(<Card footer="2 days ago" />); expect(screen.getByText("2 days ago")).toBeInTheDocument(); });
    test("renders all props together", () => {
      render(<Card title="Full" description="Desc" badge="TAG" footer="Footer"><p>Body</p></Card>);
      expect(screen.getByText("Full")).toBeInTheDocument();
      expect(screen.getByText("Desc")).toBeInTheDocument();
      expect(screen.getByText("TAG")).toBeInTheDocument();
      expect(screen.getByText("Footer")).toBeInTheDocument();
      expect(screen.getByText("Body")).toBeInTheDocument();
    });
  });
  describe("Interaction", () => {
    test("calls onClick when card is clicked", async () => {
      const user = userEvent.setup(); const fn = jest.fn();
      render(<Card title="Clickable" onClick={fn} />);
      await user.click(screen.getByRole("button")); expect(fn).toHaveBeenCalledTimes(1);
    });
    test("renders as button element when onClick is provided", () => { render(<Card title="Btn" onClick={() => {}} />); expect(screen.getByRole("button")).toBeInTheDocument(); });
    test("does not render as button when no onClick", () => { render(<Card title="Div" />); expect(screen.queryByRole("button")).not.toBeInTheDocument(); });
  });
});
