import Counter from "../components/Counter/Counter";

/** @type { import('@storybook/react').Meta<typeof Counter> } */
const meta = {
  title: "Design System/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Stateful numeric counter with increment, decrement, and reset. Supports custom step, min/max bounds, and configurable label." } },
  },
  argTypes: {
    label:        { control: "text",                description: "Label above the value",    table: { defaultValue: { summary: "Counter" } } },
    initialValue: { control: { type: "number" },    description: "Starting value / reset to", table: { defaultValue: { summary: "0" } } },
    step:         { control: { type: "number", min: 1 }, description: "Amount per click",   table: { defaultValue: { summary: "1" } } },
    min:          { control: { type: "number" },    description: "Lower bound" },
    max:          { control: { type: "number" },    description: "Upper bound" },
  },
  args: { label: "Counter", initialValue: 0, step: 1 },
};

export default meta;

export const Default        = {};
export const StepFive       = { args: { label: "Step × 5",      step: 5 } };
export const Bounded        = { args: { label: "Bounded 0–10",  initialValue: 5, min: 0, max: 10 } };
export const StartAtHundred = { args: { label: "Score",          initialValue: 100 } };

export const MultipleCounters = {
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
      <Counter label="Adults"   initialValue={1} min={0} max={9} />
      <Counter label="Children" initialValue={0} min={0} max={9} />
      <Counter label="Infants"  initialValue={0} min={0} max={4} />
    </div>
  ),
  parameters: { layout: "padded" },
};
