import { agents } from "../data/listings";

export default function AgentSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="team-section" id="team">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PEOPLE, NOT JUST PROPERTIES</p>
          <h2>Guidance that feels personal.</h2>
        </div>
        <p>
          Our advisors pair local knowledge with a steady, clear process from
          first tour to final decision.
        </p>
      </div>
      <div className="agent-grid">
        {agents.map((agent) => (
          <article className="agent-card" key={agent.id}>
            <div className="agent-avatar" aria-hidden="true">
              {agent.initials}
            </div>
            <div>
              <p>{agent.role.toUpperCase()}</p>
              <h3>{agent.name}</h3>
              <span>{agent.area}</span>
              <blockquote>“{agent.quote}”</blockquote>
              <button onClick={onContact}>
                Connect with {agent.name.split(" ")[0]}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
