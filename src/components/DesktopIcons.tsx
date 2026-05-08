import { Download } from 'lucide-react';
import type { WindowDefinition, WindowId } from '../types/portfolio';

type DesktopIconsProps = {
  windows: WindowDefinition[];
  onOpenWindow: (id: WindowId) => void;
};

export function DesktopIcons({ windows, onOpenWindow }: DesktopIconsProps) {
  return (
    <div className="desktop-icons" aria-label="Atalhos do desktop">
      {windows.map(({ id, title, icon: Icon }) => (
        <button key={id} className="desktop-icon" onClick={() => onOpenWindow(id)}>
          <span className="desktop-icon-box">
            <Icon size={26} />
          </span>
          <span>{title}</span>
        </button>
      ))}
      <button className="desktop-icon" onClick={() => onOpenWindow('contact')}>
        <span className="desktop-icon-box">
          <Download size={26} />
        </span>
        <span>Currículo.pdf</span>
      </button>
    </div>
  );
}
