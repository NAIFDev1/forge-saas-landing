import { useState } from "react";
import { Reveal } from "../components/ForgeUI";
const plans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "For the first version.",
    values: [
      "1 project",
      "Preview",
      "Basic CLI",
      "Community",
      "Personal workspace",
    ],
  },
  {
    name: "Pro",
    price: 12,
    period: "per month",
    description: "For what comes next.",
    values: [
      "Unlimited projects",
      "Production + preview",
      "CLI + REST API",
      "Priority",
      "Environment management",
    ],
  },
  {
    name: "Team",
    price: 29,
    period: "per member / month",
    description: "For building together.",
    values: [
      "Unlimited projects",
      "Production + preview",
      "Everything in Pro",
      "Dedicated",
      "Roles + audit logs",
    ],
  },
];
const features = [
  "Projects",
  "Deployments",
  "Developer tools",
  "Support",
  "Workspace",
];
export default function Plans() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      className="pricing-section board-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <Reveal className="section-intro">
        <h2 id="pricing-title">
          Pick your
          <br />
          starting point.
        </h2>
        <p>
          Start with an idea. Make room as it grows.
          <br />
          Sample plans for a fictional platform.
        </p>
      </Reveal>
      <Reveal className="plan-comparison">
        <div className="comparison-labels" aria-hidden="true">
          <div className="comparison-heading">
            A little room.
            <br />
            Or a lot.
          </div>
          {features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
          <div />
        </div>
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`plan ${plan.name === "Pro" ? "plan-pro" : ""} ${selected === plan.name ? "plan-selected" : ""}`}
          >
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="plan-price">
                ${plan.price}
                <span>{plan.period}</span>
              </div>
            </div>
            <dl>
              {features.map((feature, index) => (
                <div key={feature}>
                  <dt>{feature}</dt>
                  <dd>{plan.values[index]}</dd>
                </div>
              ))}
            </dl>
            <button
              className={`button ${plan.name === "Pro" ? "button-light" : "button-dark"}`}
              aria-pressed={selected === plan.name}
              onClick={() => setSelected(plan.name)}
            >
              {selected === plan.name
                ? `${plan.name} selected`
                : `Choose ${plan.name}`}
            </button>
          </article>
        ))}
      </Reveal>
      <p className="pricing-status" role="status">
        {selected
          ? `${selected} selected. This is a portfolio demo, so no account, payment, or subscription is created.`
          : "Demo pricing only. Explore a plan without signing up or entering payment details."}
      </p>
    </section>
  );
}
