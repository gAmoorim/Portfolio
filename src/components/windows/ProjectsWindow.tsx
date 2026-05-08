import { ChevronRight, FileText, Github, Globe2 } from 'lucide-react';
import type { Project } from '../../types/portfolio';

type ProjectsWindowProps = {
  projects: Project[];
  selectedProject: Project;
  onSelectProject: (project: Project) => void;
};

export function ProjectsWindow({ projects, selectedProject, onSelectProject }: ProjectsWindowProps) {
  return (
    <section className="project-layout">
      <div className="project-list">
        {projects.map((project) => (
          <button
            key={project.title}
            className={selectedProject.title === project.title ? 'project-tab active' : 'project-tab'}
            onClick={() => onSelectProject(project)}
          >
            <img src={project.image} alt="" />
            <span>{project.title}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>

      <article className="project-detail">
        <img src={selectedProject.image} alt={`Preview do projeto ${selectedProject.title}`} />
        <div className="project-detail-body">
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </div>

          <div className="tag-row">
            {selectedProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="focus-list">
            {selectedProject.focus.map((item) => (
              <div key={item}>
                <FileText size={15} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="project-actions">
            {selectedProject.deploy && (
              <a href={selectedProject.deploy} target="_blank" rel="noreferrer">
                <Globe2 size={16} />
                Abrir
              </a>
            )}
            <a href={selectedProject.code} target="_blank" rel="noreferrer">
              <Github size={16} />
              Código
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
