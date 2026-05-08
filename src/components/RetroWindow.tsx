import { Maximize2, Minimize2, Minus, X } from 'lucide-react';
import type { WindowChromeProps } from '../types/portfolio';

export function RetroWindow({
  id,
  title,
  icon: Icon,
  active,
  maximized,
  onFocus,
  onClose,
  onMaximize,
  onMinimize,
  className,
  children,
}: WindowChromeProps) {
  return (
    <section
      className={`retro-window ${active ? 'active' : ''} ${maximized ? 'maximized' : ''} ${className ?? ''}`}
      onMouseDown={() => onFocus(id)}
    >
      <header className="window-titlebar">
        <div>
          <Icon size={15} />
          <span>{title}</span>
        </div>
        <div className="window-controls">
          <button
            type="button"
            aria-label={`Minimizar ${title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => onMinimize(id)}
          >
            <Minus size={13} />
          </button>
          <button
            type="button"
            aria-label={maximized ? `Restaurar ${title}` : `Maximizar ${title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => onMaximize(id)}
          >
            {maximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>
          <button
            type="button"
            aria-label={`Fechar ${title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => onClose(id)}
          >
            <X size={13} />
          </button>
        </div>
      </header>
      <div className="window-content">{children}</div>
    </section>
  );
}
