import { fn } from "@storybook/test";
import LoginForm from "../components/LoginForm/LoginForm";

/** @type { import('@storybook/react').Meta<typeof LoginForm> } */
const meta = {
  title: "Design System/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Controlled login form with built-in validation. Validates email format and minimum password length. Shows a success state after valid submission." } },
  },
  argTypes: {
    onSubmit: { action: "form submitted", description: "Callback with { email, password } on success" },
  },
  args: { onSubmit: fn() },
};

export default meta;

export const Default = {};

export const SuccessState = {
  render: () => {
    const { useState } = require("react");
    const Wrapper = () => {
      const [done, setDone] = useState(false);
      if (done) {
        return (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem", padding:"2.5rem", border:"2px solid var(--color-success)", boxShadow:"6px 6px 0 var(--color-success)", background:"var(--color-surface)", maxWidth:"380px", width:"100%", fontFamily:"var(--font-mono)", textAlign:"center" }}>
            <span style={{ fontSize:"2.5rem", color:"var(--color-success)" }}>✓</span>
            <p style={{ fontSize:"1.1rem", fontWeight:700, textTransform:"uppercase", color:"var(--color-text)", margin:0 }}>Welcome back!</p>
            <button style={{ background:"none", border:"none", fontFamily:"var(--font-mono)", fontSize:"0.75rem", color:"var(--color-text-muted)", cursor:"pointer", textDecoration:"underline", textTransform:"uppercase" }} onClick={() => setDone(false)}>Sign out</button>
          </div>
        );
      }
      return <LoginForm onSubmit={() => setDone(true)} />;
    };
    return <Wrapper />;
  },
  parameters: { docs: { description: { story: "Enter any valid email + 6-char password and click Sign In to see the success state." } } },
};
