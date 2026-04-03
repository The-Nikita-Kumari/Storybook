import Button from "../components/Button/Button";

/** @type { import('@storybook/react').Meta<typeof Button> } */
const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The foundational interactive element. 3 semantic variants, 3 sizes, disabled state, and full-width layout. Fully theme-aware — toggle the background in the toolbar to see dark mode.",
      },
    },
  },
  argTypes: {
    variant:   { control: { type: "select" }, options: ["primary", "secondary", "danger"], description: "Visual style", table: { defaultValue: { summary: "primary" } } },
    size:      { control: { type: "radio"  }, options: ["sm", "md", "lg"],                description: "Button size",  table: { defaultValue: { summary: "md" } } },
    children:  { control: "text",    description: "Label text" },
    disabled:  { control: "boolean", description: "Disables the button" },
    fullWidth: { control: "boolean", description: "Stretches to full container width" },
    onClick:   { action: "clicked" },
  },
  args: { children: "Click Me", variant: "primary", size: "md", disabled: false, fullWidth: false },
};

export default meta;

export const Primary   = { args: { variant: "primary",   children: "Primary Action"   } };
export const Secondary = { args: { variant: "secondary", children: "Secondary Action" } };
export const Danger    = { args: { variant: "danger",    children: "Delete Item"       } };
export const Disabled  = { args: { variant: "primary",   children: "Unavailable", disabled: true } };
export const Small     = { args: { size: "sm", children: "Small"       } };
export const Large     = { args: { size: "lg", children: "Get Started" } };
export const FullWidth = { args: { fullWidth: true, children: "Submit Form" }, parameters: { layout: "padded" } };

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: { layout: "padded" },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: { layout: "padded" },
};
