import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactWindow() {
  return (
    <section className="contact-panel">
      <h2>Vamos conversar?</h2>
      <p>
        Tenho interesse em oportunidades back-end, fullstack e projetos onde eu possa crescer escrevendo código de
        verdade.
      </p>
      <div className="contact-actions">
        <a href="mailto:gabrielamorim.dev@gmail.com">
          <Mail size={17} />
          Email
        </a>
        <a href="https://github.com/gAmoorim" target="_blank" rel="noreferrer">
          <Github size={17} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/gabriel-amorim-609211304/" target="_blank" rel="noreferrer">
          <Linkedin size={17} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
