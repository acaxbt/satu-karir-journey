import { useState } from "react";
import Homepage from "@/components/Homepage";
import LoggedInHomepage from "@/components/LoggedInHomepage";
import ChatScreen from "@/components/ChatScreen";
import DashboardScreen from "@/components/DashboardScreen";
import CertificationScreen from "@/components/CertificationScreen";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'chat' | 'dashboard' | 'certification' | 'profile'>('home');
  const [isLoggedIn] = useState(true); // For demo - normally would check actual auth state

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return isLoggedIn ? <LoggedInHomepage /> : <Homepage onNavigateToChat={() => setActiveScreen('chat')} />;
      case 'chat':
        return <ChatScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'certification':
        return <CertificationScreen />;
      case 'profile':
        return <div className="p-6"><h1 className="text-2xl">Profil Page - Coming Soon</h1></div>;
      default:
        return isLoggedIn ? <LoggedInHomepage /> : <Homepage onNavigateToChat={() => setActiveScreen('chat')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className={activeScreen !== 'home' ? 'pb-20' : ''}>
        {renderScreen()}
      </main>
      {(activeScreen !== 'home' || isLoggedIn) && (
        <Navigation 
          activeScreen={activeScreen as 'home' | 'chat' | 'dashboard' | 'profile'} 
          onScreenChange={(screen) => setActiveScreen(screen as any)} 
        />
      )}
    </div>
  );
};

export default Index;