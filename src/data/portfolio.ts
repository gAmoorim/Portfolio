import { Code2, Database, FolderOpen, Github, Linkedin, Mail, ServerCog, Terminal, UserRound } from 'lucide-react';
import type { Project, QuickLink, WindowDefinition } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'Finance Flow',
    image: '/pagina-finance.png',
    description:
      'Dashboard financeiro para registrar transações, definir metas e acompanhar a evolução das finanças com uma interface simples.',
    stack: ['TypeScript', 'JavaScript', 'CSS', 'Vercel'],
    focus: ['Controle de transações', 'Resumo financeiro', 'Fluxos de metas'],
    deploy: 'https://financefloweb.vercel.app',
    code: 'https://github.com/gAmoorim/FinanceFlow',
  },
  {
    title: 'LearnHUB',
    image: '/learnhub.png',
    description:
      'Plataforma de ensino onde instrutores gerenciam cursos e alunos acompanham progresso, inscrições e avaliações.',
    stack: ['JavaScript', 'React', 'Vite'],
    focus: ['Área de cursos', 'Progresso do aluno', 'Experiência responsiva'],
    deploy: 'https://yourlearnhub.vercel.app',
    code: 'https://github.com/gAmoorim/LearnHUB',
  },
    {
    title: 'Noo Way Store',
    image: '/nooway.png',
    description:
      'Noo Way Store é uma aplicação fullstack de e-commerce para catálogo e venda de calçados, com vitrine pública, carrinho, autenticação de usuários e painel administrativo.',
    stack: ['React', 'Vite', 'JavaScript', 'Node.js', 'Neon PostgreSQL', 'JWT',],
    focus: ['Dark/light mode', 'Vitrine de produtos', 'e-commerce responsivo', 'Catálogo com filtros'],
    deploy: 'https://noowaystore.vercel.app',
    code: 'https://github.com/gAmoorim/noowaystore',
  },
  {
    title: 'DoIt',
    image: '/doit.png',
    description:
      'Aplicativo desktop de gerenciamento de tarefas criado com Electron para rodar como software nativo no computador.',
    stack: ['JavaScript', 'React', 'Vite', 'Electron', 'CSS'],
    focus: ['App desktop', 'Organização de tarefas', 'UI para rotina diária'],
    code: 'https://github.com/gAmoorim/doIt',
  },
  {
    title: 'Tech Store',
    image: '/techstore.png',
    description:
      'Loja virtual fictícia com página inicial, catálogo de produtos e busca, focada em responsividade e navegação fluida.',
    stack: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    focus: ['Catálogo', 'Busca', 'Responsividade'],
    deploy: 'https://tech-store-lime.vercel.app/',
    code: 'https://github.com/gAmoorim/TechStore',
  },
];

export const windows: WindowDefinition[] = [
  { id: 'profile', title: 'Sobre.exe', icon: UserRound },
  { id: 'projects', title: 'Projetos', icon: FolderOpen },
  { id: 'skills', title: 'Skills.dll', icon: ServerCog },
  { id: 'terminal', title: 'Terminal', icon: Terminal },
  { id: 'contact', title: 'Contato.txt', icon: Mail },
];

export const quickLinks: QuickLink[] = [
  { label: 'GitHub', href: 'https://github.com/gAmoorim', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-amorim-609211304/', icon: Linkedin },
  { label: 'Email', href: 'mailto:gabrielamorim.dev@gmail.com', icon: Mail },
];

export const backendSkills = ['Node.js', 'APIs REST', 'PostgreSQL', 'Neon DB', 'Auth JWT', 'Deploy'];

export const frontendSkills = ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'];

export const skillGroups = {
  backend: {
    title: 'Backend',
    icon: Database,
    skills: backendSkills,
  },
  frontend: {
    title: 'Frontend',
    icon: Code2,
    skills: frontendSkills,
  },
};
