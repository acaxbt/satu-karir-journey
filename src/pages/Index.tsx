import { useState } from "react";
import ChatScreen from "@/components/ChatScreen";
import DashboardScreen from "@/components/DashboardScreen";
import CertificationScreen from "@/components/CertificationScreen";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<'chat' | 'dashboard' | 'certification'>('chat');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'chat':
        return <ChatScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'certification':
        return <CertificationScreen />;
      default:
        return <ChatScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        {renderScreen()}
      </main>
      <Navigation activeScreen={activeScreen} onScreenChange={setActiveScreen} />
    </div>
  );
};

export default Index;