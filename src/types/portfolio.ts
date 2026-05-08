import type { ElementType, ReactNode } from 'react';

export type WindowId = 'profile' | 'projects' | 'skills' | 'terminal' | 'contact';

export type Project = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  focus: string[];
  deploy?: string;
  code: string;
};

export type WindowDefinition = {
  id: WindowId;
  title: string;
  icon: ElementType;
};

export type QuickLink = {
  label: string;
  href: string;
  icon: ElementType;
};

export type WindowChromeProps = WindowDefinition & {
  active: boolean;
  maximized: boolean;
  className?: string;
  children: ReactNode;
  onClose: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onMinimize: (id: WindowId) => void;
};
