import Input from "../components/Input/Input";

/** @type { import('@storybook/react').Meta<typeof Input> } */
const meta = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Accessible text input with label, placeholder, helper text, error state, and disabled state. All states respond to the active theme." } },
    layout: "padded",
  },
  argTypes: {
    label:      { control: "text",    description: "Visible label" },
    placeholder:{ control: "text",    description: "Ghost text when empty" },
    type:       { control: { type: "select" }, options: ["text","email","password","number","tel"], table: { defaultValue: { summary: "text" } } },
    error:      { control: "text",    description: "Error message — sets aria-invalid" },
    helperText: { control: "text",    description: "Hint shown when no error" },
    disabled:   { control: "boolean", description: "Disables interaction" },
    required:   { control: "boolean", description: "Marks field as required" },
    fullWidth:  { control: "boolean", description: "Stretches to container width" },
    value:      { control: "text" },
  },
  args: { label: "Label", placeholder: "Placeholder...", type: "text", disabled: false, required: false, fullWidth: false, name: "demo" },
};

export default meta;

export const Default        = { args: { label: "Full Name",     name: "fullname",  placeholder: "Jane Doe" } };
export const WithHelperText = { args: { label: "Email Address", name: "email",     type: "email", placeholder: "you@example.com", helperText: "We'll never share your email." } };
export const WithError      = { args: { label: "Email Address", name: "email-err", type: "email", error: "Please enter a valid email address.", value: "not-an-email" } };
export const Required       = { args: { label: "Password",      name: "password",  type: "password", placeholder: "Min. 8 characters", required: true, helperText: "Must include a number and special character." } };
export const Disabled       = { args: { label: "Username",      name: "u-dis",     value: "johndoe", disabled: true } };
export const FullWidth      = { args: { label: "Search",        name: "search",    placeholder: "Search components...", fullWidth: true }, parameters: { layout: "padded" } };

export const AllStates = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "320px" }}>
      <Input label="Default"     name="s1" placeholder="Default state" />
      <Input label="With Helper" name="s2" placeholder="..." helperText="This is helper text." />
      <Input label="Error State" name="s3" value="bad-value" error="This field has an error." />
      <Input label="Disabled"    name="s4" value="Cannot edit" disabled />
      <Input label="Required"    name="s5" placeholder="Required field" required />
    </div>
  ),
  parameters: { layout: "padded" },
};
