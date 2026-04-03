import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Counter from "../components/Counter/Counter";
import LoginForm from "../components/LoginForm/LoginForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("button");
  const tabs = [
    { id: "button", label: "Button" },
    { id: "card",   label: "Card"   },
    { id: "input",  label: "Input"  },
    { id: "counter",label: "Counter"},
    { id: "form",   label: "Form"   },
  ];
  return (
    <>
      <Head>
        <title>Testing Suite</title>
        <meta name="description" content="Component Library — Week 1 & 2" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.headerLabel}>Frontend Internship — Week 1 & 2</div>
            <h1 className={styles.title}>Component Library</h1>
            <p className={styles.subtitle}>Testing Suite · Storybook Design System</p>
            <div className={styles.badge}><span>✓</span> 61 Tests Passing</div>
          </div>
        </header>
        <main className={styles.main}>
          <nav className={styles.tabs}>
            {tabs.map(tab => (
              <button key={tab.id} className={[styles.tab, activeTab === tab.id ? styles.tabActive : ""].join(" ")} onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </nav>
          <div className={styles.showcase}>
            {activeTab === "button" && (
              <section>
                <h2 className={styles.sectionTitle}>Button</h2>
                <p className={styles.sectionDesc}>3 variants · 3 sizes · disabled · full-width</p>
                <div className={styles.demoGrid}>
                  <div><p className={styles.groupLabel}>Variants</p><div className={styles.row}><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Button variant="danger">Danger</Button></div></div>
                  <div><p className={styles.groupLabel}>Sizes</p><div className={styles.row}><Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button></div></div>
                  <div><p className={styles.groupLabel}>States</p><div className={styles.row}><Button disabled>Disabled</Button><Button fullWidth>Full Width</Button></div></div>
                </div>
              </section>
            )}
            {activeTab === "card" && (
              <section>
                <h2 className={styles.sectionTitle}>Card</h2>
                <p className={styles.sectionDesc}>title · description · badge · footer · children · onClick</p>
                <div className={styles.cardGrid}>
                  <Card badge="NEW" title="Basic Card" description="A card with title, description, and badge." footer="Created today" />
                  <Card badge="CLICK" badgeVariant="warning" title="Clickable" description="This card has an onClick handler." onClick={() => alert("Clicked!")} hoverable />
                  <Card badge="SLOT" badgeVariant="success" title="With Children"><div className={styles.row}><Button size="sm" variant="secondary">Action</Button><Button size="sm">Primary</Button></div></Card>
                </div>
              </section>
            )}
            {activeTab === "input" && (
              <section>
                <h2 className={styles.sectionTitle}>Input</h2>
                <p className={styles.sectionDesc}>label · placeholder · error · helperText · disabled</p>
                <div className={styles.inputGrid}>
                  <Input label="Username" name="u" placeholder="johndoe" />
                  <Input label="Email" name="e" type="email" placeholder="you@example.com" helperText="Never shared." />
                  <Input label="Error State" name="err" error="This field is required" />
                  <Input label="Disabled" name="d" value="Cannot edit" disabled onChange={() => {}} />
                </div>
              </section>
            )}
            {activeTab === "counter" && (
              <section>
                <h2 className={styles.sectionTitle}>Counter</h2>
                <p className={styles.sectionDesc}>initialValue · step · min/max · reset</p>
                <div className={styles.counterGrid}>
                  <Counter label="Basic" />
                  <Counter label="Step ×5" step={5} />
                  <Counter label="Bounded 0–10" min={0} max={10} initialValue={5} />
                </div>
              </section>
            )}
            {activeTab === "form" && (
              <section>
                <h2 className={styles.sectionTitle}>Login Form</h2>
                <p className={styles.sectionDesc}>validation · error states · success state</p>
                <div className={styles.formWrap}>
                  <LoginForm onSubmit={(d) => console.log("Submitted:", d)} />
                </div>
              </section>
            )}
          </div>
          <div className={styles.testInfo}>
            <h3>Test Coverage</h3>
            <table className={styles.table}>
              <thead><tr><th>Component</th><th>Tests</th><th>What's Covered</th></tr></thead>
              <tbody>
                <tr><td>Button</td><td>11</td><td>Render + Interaction</td></tr>
                <tr><td>Card</td><td>10</td><td>Render + Interaction</td></tr>
                <tr><td>Input</td><td>11</td><td>Render + Interaction</td></tr>
                <tr><td>Counter</td><td>13</td><td>Render + Inc/Dec/Reset</td></tr>
                <tr><td>LoginForm</td><td>16</td><td>Render + Validation + Submit</td></tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
