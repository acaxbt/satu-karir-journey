import { Home, MessageCircle, BarChart3, User } from "lucide-react";

interface NavigationProps {
  activeScreen: 'home' | 'chat' | 'dashboard' | 'profile';
  onScreenChange: (screen: 'home' | 'chat' | 'dashboard' | 'profile') => void;
}

const Navigation = ({ activeScreen, onScreenChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'chat', icon: MessageCircle, label: 'Satu Kopilot' },
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'profile', icon: User, label: 'Profil' },
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