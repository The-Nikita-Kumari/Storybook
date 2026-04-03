import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

/** @type { import('@storybook/react').Meta<typeof Card> } */
const meta = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Content container with brutalist hard-shadow styling. Supports badge, title, description, footer, children slot, and clickable variant. Fully theme-aware." } },
    layout: "padded",
  },
  argTypes: {
    title:        { control: "text",    description: "Primary heading" },
    description:  { control: "text",    description: "Body text" },
    badge:        { control: "text",    description: "Badge label" },
    badgeVariant: { control: { type: "select" }, options: ["default","success","warning","danger"], table: { defaultValue: { summary: "default" } } },
    footer:       { control: "text",    description: "Footer meta text" },
    hoverable:    { control: "boolean", description: "Lift effect on hover" },
    onClick:      { action: "card clicked" },
  },
  args: { title: "Card Title", description: "A short description providing context.", hoverable: false },
};

export default meta;

export const Default     = { args: { title: "Component Card",         description: "A clean container for grouping related information." } };
export const WithBadge   = { args: { badge: "NEW",        badgeVariant: "default", title: "Latest Release",          description: "Added in the most recent design system update.", footer: "Released April 2026" } };
export const BadgeSuccess= { args: { badge: "ACTIVE",     badgeVariant: "success", title: "All Systems Operational",  description: "No incidents in the past 30 days.",             footer: "Last checked: just now" } };
export const BadgeWarning= { args: { badge: "REVIEW",     badgeVariant: "warning", title: "Pending Approval",         description: "Awaiting review before publishing." } };
export const BadgeDanger = { args: { badge: "DEPRECATED", badgeVariant: "danger",  title: "Legacy Component",         description: "Will be removed in the next major version." } };
export const Clickable   = { args: { badge: "INTERACTIVE",             title: "Click Me",                description: "Renders as a button element for full a11y support.", hoverable: true } };

export const WithChildren = {
  render: () => (
    <Card badge="FEATURED" badgeVariant="warning" title="With Actions" description="Cards can host any child components.">
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Button size="sm" variant="secondary">Learn More</Button>
        <Button size="sm">Get Started</Button>
      </div>
    </Card>
  ),
  parameters: { layout: "padded" },
};

export const CardGrid = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 240px)", gap: "1.5rem" }}>
      <Card badge="UI"   badgeVariant="default" title="Button"  description="Clickable element with semantic variants." footer="3 variants" />
      <Card badge="FORM" badgeVariant="warning"  title="Input"   description="Accessible input with validation support." footer="5 states" />
      <Card badge="DATA" badgeVariant="success"  title="Counter" description="Stateful increment/decrement component."  footer="Min / Max" />
    </div>
  ),
  parameters: { layout: "padded" },
};
