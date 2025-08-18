import { MessageCircle, BarChart3, Award } from "lucide-react";

interface NavigationProps {
  activeScreen: 'chat' | 'dashboard' | 'certification';
  onScreenChange: (screen: 'chat' | 'dashboard' | 'certification') => void;
}

const Navigation = ({ activeScreen, onScreenChange }: NavigationProps) => {
  const navItems = [
    { id: 'chat', icon: MessageCircle, label: 'Chat AI' },
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'certification', icon: Award, label: 'Sertifikat' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onScreenChange(id)}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeScreen === id
                ? 'text-primary'
                : 'text-text-secondary hover:text-foreground'
            }`}
          >
            <Icon size={24} strokeWidth={1.5} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;