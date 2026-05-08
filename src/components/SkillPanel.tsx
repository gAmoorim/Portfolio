import type { ElementType } from 'react';

type SkillPanelProps = {
  title: string;
  icon: ElementType;
  skills: string[];
};

export function SkillPanel({ title, icon: Icon, skills }: SkillPanelProps) {
  return (
    <div className="skill-panel">
      <h2>
        <Icon size={20} />
        {title}
      </h2>
      <div className="tag-row">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
