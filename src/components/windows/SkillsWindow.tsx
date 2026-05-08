import { skillGroups } from '../../data/portfolio';
import { SkillPanel } from '../SkillPanel';

export function SkillsWindow() {
  return (
    <section className="skills-grid">
      <SkillPanel {...skillGroups.backend} />
      <SkillPanel {...skillGroups.frontend} />
      <div className="deliveries">
        <h2>O que entrego</h2>
        <ul>
          <li>APIs organizadas para cadastro, listagem, filtros e regras de negócio.</li>
          <li>Integração entre front-end, banco de dados e deploy em ambiente real.</li>
          <li>Interfaces responsivas para mostrar o produto funcionando de ponta a ponta.</li>
        </ul>
      </div>
    </section>
  );
}
