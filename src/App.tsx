import { useMemo, useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { DesktopIcons } from './components/DesktopIcons';
import { RetroWindow } from './components/RetroWindow';
import { Taskbar } from './components/Taskbar';
import { ContactWindow } from './components/windows/ContactWindow';
import { ProfileWindow } from './components/windows/ProfileWindow';
import { ProjectsWindow } from './components/windows/ProjectsWindow';
import { SkillsWindow } from './components/windows/SkillsWindow';
import { TerminalWindow } from './components/windows/TerminalWindow';
import { projects, windows } from './data/portfolio';
import type { Project, WindowId } from './types/portfolio';

const initialOpenWindows: WindowId[] = ['profile', 'projects', 'terminal'];

function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openWindows, setOpenWindows] = useState<WindowId[]>(initialOpenWindows);
  const [minimizedWindows, setMinimizedWindows] = useState<WindowId[]>([]);
  const [maximizedWindow, setMaximizedWindow] = useState<WindowId | null>(null);
  const [activeWindow, setActiveWindow] = useState<WindowId>('profile');
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const time = useMemo(
    () =>
      new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date()),
    []
  );

  const handleBoot = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsBooted(true);
      setIsLoading(false);
    }, 1800);
  };

  const focusWindow = (id: WindowId) => {
    setMinimizedWindows((current) => current.filter((windowId) => windowId !== id));
    setActiveWindow(id);
  };

  const openWindow = (id: WindowId) => {
    setOpenWindows((current) => (current.includes(id) ? current : [...current, id]));
    focusWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setOpenWindows((current) => {
      const next = current.filter((windowId) => windowId !== id);
      if (activeWindow === id && next.length > 0) {
        setActiveWindow(next[next.length - 1]);
      }
      return next;
    });
    setMinimizedWindows((current) => current.filter((windowId) => windowId !== id));
    setMaximizedWindow((current) => (current === id ? null : current));
  };

  const minimizeWindow = (id: WindowId) => {
    setMinimizedWindows((current) => (current.includes(id) ? current : [...current, id]));
    setMaximizedWindow((current) => (current === id ? null : current));

    const nextActive = [...openWindows].reverse().find((windowId) => windowId !== id && !minimizedWindows.includes(windowId));
    if (nextActive) {
      setActiveWindow(nextActive);
    }
  };

  const toggleMaximizeWindow = (id: WindowId) => {
    setMaximizedWindow((current) => (current === id ? null : id));
    focusWindow(id);
  };

  const visibleWindows = openWindows.filter(
    (id) => !minimizedWindows.includes(id) && (!maximizedWindow || maximizedWindow === id)
  );

  if (!isBooted) {
    return <BootScreen isLoading={isLoading} onBoot={handleBoot} />;
  }

  return (
    <main className="desktop-shell">
      <DesktopIcons windows={windows} onOpenWindow={openWindow} />

      <div className={maximizedWindow ? 'workspace maximized' : 'workspace'} aria-label="Janelas abertas">
        {visibleWindows.map((id) => {
          const windowDefinition = windows.find((item) => item.id === id);
          if (!windowDefinition) return null;

          return (
            <RetroWindow
              key={id}
              {...windowDefinition}
              active={activeWindow === id}
              maximized={maximizedWindow === id}
              onFocus={focusWindow}
              onClose={closeWindow}
              onMaximize={toggleMaximizeWindow}
              onMinimize={minimizeWindow}
              className={`${id}-window`}
            >
              {id === 'profile' && <ProfileWindow />}
              {id === 'skills' && <SkillsWindow />}
              {id === 'projects' && (
                <ProjectsWindow
                  projects={projects}
                  selectedProject={selectedProject}
                  onSelectProject={setSelectedProject}
                />
              )}
              {id === 'terminal' && <TerminalWindow />}
              {id === 'contact' && <ContactWindow />}
            </RetroWindow>
          );
        })}
      </div>

      <Taskbar
        activeWindow={activeWindow}
        openWindows={openWindows}
        time={time}
        windows={windows}
        onOpenWindow={openWindow}
        onSelectWindow={focusWindow}
      />
    </main>
  );
}

export default App;
