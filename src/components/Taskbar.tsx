import { ExternalLink, MonitorSmartphone } from 'lucide-react';
import type { WindowDefinition, WindowId } from '../types/portfolio';

type TaskbarProps = {
  activeWindow: WindowId;
  openWindows: WindowId[];
  time: string;
  windows: WindowDefinition[];
  onOpenWindow: (id: WindowId) => void;
  onSelectWindow: (id: WindowId) => void;
};

export function Taskbar({ activeWindow, openWindows, time, windows, onOpenWindow, onSelectWindow }: TaskbarProps) {
  return (
    <footer className="taskbar">
      <button className="start-button" onClick={() => onOpenWindow('profile')}>
        <MonitorSmartphone size={18} />
        Start
      </button>
      <div className="taskbar-apps">
        {openWindows.map((id) => {
          const item = windows.find((windowItem) => windowItem.id === id);
          if (!item) return null;
          const Icon = item.icon;

          return (
            <button
              key={id}
              className={activeWindow === id ? 'taskbar-item active' : 'taskbar-item'}
              onClick={() => onSelectWindow(id)}
            >
              <Icon size={15} />
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="clock">
        <ExternalLink size={14} />
        <span>{time}</span>
      </div>
    </footer>
  );
}
