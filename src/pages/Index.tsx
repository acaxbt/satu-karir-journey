import { useState } from "react";
import Homepage from "@/components/Homepage";
import ChatScreen from "@/components/ChatScreen";
import DashboardScreen from "@/components/DashboardScreen";
import CertificationScreen from "@/components/CertificationScreen";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'chat' | 'dashboard' | 'certification'>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <Homepage onNavigateToChat={() => setActiveScreen('chat')} />;
      case 'chat':
        return <ChatScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'certification':
        return <CertificationScreen />;
      default:
        return <Homepage onNavigateToChat={() => setActiveScreen('chat')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className={activeScreen !== 'home' ? 'pb-20' : ''}>
        {renderScreen()}
      </main>
      {activeScreen !== 'home' && (
        <Navigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      )}
    </div>
  );
};

export default Index;