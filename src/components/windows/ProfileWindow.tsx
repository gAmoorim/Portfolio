import { projects, quickLinks } from '../../data/portfolio';

export function ProfileWindow() {
  return (
    <section className="profile-grid">
      <div className="profile-copy">
        <span className="status-line">
          <span className="status-dot" />
          Disponível para oportunidades backend
        </span>
        <h1>Gabriel Amorim</h1>
        <p className="headline">Desenvolvedor Back-end focado em Node.js, APIs REST e PostgreSQL.</p>
        <p className="summary">
          Construo aplicações web com atenção a regras de negócio, organização de dados, autenticação, deploy e
          experiências claras para quem usa.
        </p>
        <div className="quick-actions">
          {quickLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon size={17} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="system-card">
        <div className="system-row">
          <span>Stack principal</span>
          <strong>Node.js + SQL</strong>
        </div>
        <div className="system-row">
          <span>Perfil</span>
          <strong>Back-end / Fullstack</strong>
        </div>
        <div className="system-row">
          <span>Deploy</span>
          <strong>Vercel</strong>
        </div>
        <div className="system-row">
          <span>Projetos</span>
          <strong>{projects.length} publicados</strong>
        </div>
      </div>
    </section>
  );
}
