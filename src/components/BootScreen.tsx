import { Power } from 'lucide-react';

type BootScreenProps = {
  isLoading: boolean;
  onBoot: () => void;
};

export function BootScreen({ isLoading, onBoot }: BootScreenProps) {
  return (
    <div className="boot-screen">
      {!isLoading ? (
        <button className="power-button" onClick={onBoot} aria-label="Iniciar Portfolio">
          <Power size={96} />
          <span>Iniciar GabrielOS</span>
        </button>
      ) : (
        <div className="boot-panel">
          <img src="/logoWxp.png" alt="Logo Windows XP" className="boot-logo" />
          <div className="boot-progress" aria-hidden="true">
            <span />
          </div>
          <p>Carregando portfolio...</p>
        </div>
      )}
    </div>
  );
}
