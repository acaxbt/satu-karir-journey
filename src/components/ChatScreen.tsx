import { useState } from "react";
import { Send, Briefcase, GraduationCap, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    {
      id: 1,
      type: 'user',
      content: 'Saya mau jadi chef hotel',
      timestamp: '10:30',
    },
    {
      id: 2,
      type: 'ai',
      content: 'Bagus sekali! Untuk menjadi chef hotel yang sukses, berikut langkah-langkah yang perlu Anda ikuti:',
      timestamp: '10:31',
      recommendations: [
        {
          title: 'Pelatihan Dasar Kuliner',
          description: 'Sertifikat SKKNI Bidang Perhotelan',
          duration: '3 bulan',
          type: 'training'
        },
        {
          title: 'Magang Hotel Bintang 4',
          description: 'Pengalaman praktis di kitchen hotel',
          duration: '6 bulan',
          type: 'internship'
        }
      ]
    },
  ]);

  const quickActions = [
    { icon: Briefcase, label: 'Apply Job', variant: 'default' as const },
    { icon: GraduationCap, label: 'Join Training', variant: 'secondary' as const },
    { icon: FileCheck, label: 'Check Certification', variant: 'outline' as const },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <h1 className="text-2xl font-semibold text-foreground">Satu Kopilot</h1>
        <p className="text-sm text-text-secondary">AI Career Assistant</p>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`px-4 py-3 rounded-xl shadow-soft ${
                  msg.type === 'user'
                    ? 'bg-chat-user text-white ml-4'
                    : 'bg-surface-elevated text-foreground mr-4'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
              
              {msg.recommendations && (
                <div className="mt-4 space-y-3 mr-4">
                  {msg.recommendations.map((rec, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-soft">
                      <h4 className="font-medium text-foreground">{rec.title}</h4>
                      <p className="text-sm text-text-secondary mt-1">{rec.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-text-secondary">{rec.duration}</span>
                        <Button size="sm" variant="outline">
                          Lihat Detail
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <p className="text-xs text-text-secondary mt-2 px-2">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4 border-t border-border bg-surface-elevated">
        <div className="flex gap-2 mb-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              className="flex-1 flex items-center gap-2"
            >
              <action.icon size={16} />
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex gap-3">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tanyakan tentang karier impian Anda..."
            className="flex-1"
          />
          <Button size="icon" className="shrink-0">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;