import { useState } from "react";
import { Send, Target, ChefHat, GraduationCap, Award, Briefcase, Users, Rocket, RotateCcw, School, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const suggestedPrompts = [
    {
      icon: Target,
      text: "Cari pekerjaan sesuai jurusan saya",
      emoji: "🎯"
    },
    {
      icon: ChefHat,
      text: "Saya mau jadi chef hotel, apa langkahnya?",
      emoji: "🧑‍🍳"
    },
    {
      icon: GraduationCap,
      text: "Ikut pelatihan digital marketing",
      emoji: "🎓"
    },
    {
      icon: Award,
      text: "Lihat sertifikat SKKNI saya",
      emoji: "🪪"
    },
    {
      icon: Briefcase,
      text: "Tolong buatkan CV saya otomatis",
      emoji: "💼"
    },
    {
      icon: Users,
      text: "Daftar job fair terdekat",
      emoji: "🤝"
    },
    {
      icon: Rocket,
      text: "Rencanakan karier jadi supervisor",
      emoji: "🚀"
    },
    {
      icon: RotateCcw,
      text: "Eksplorasi karier baru di bidang IT",
      emoji: "🔄"
    },
    {
      icon: School,
      text: "Rekomendasi BLK atau pelatihan terdekat",
      emoji: "🏫"
    },
    {
      icon: BarChart,
      text: "Skill apa yang paling dibutuhkan di tahun ini?",
      emoji: "📊"
    }
  ];

  const handlePromptClick = (promptText: string) => {
    setSearchQuery(promptText);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // This would typically navigate to chat screen or handle the search
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-foreground">Satu Kopilot</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Masuk
          </Button>
          <Button variant="default" size="sm">
            Daftar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Bangun Kariermu dengan<br />
            <span className="text-primary">Satu Kopilot</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-6">
            AI Copilot untuk kerja, pelatihan, dan sertifikasi
          </p>

          {/* Chat Input */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Textarea
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Saya mau jadi chef hotel"
                className="w-full min-h-[80px] text-base pl-4 pr-16 rounded-xl border-2 border-border focus:border-primary shadow-soft resize-none"
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSearch())}
              />
              <Button
                onClick={handleSearch}
                size="icon"
                className="absolute right-2 bottom-2 h-10 w-10 rounded-lg"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Prompts */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-sm font-medium text-text-secondary mb-4">
            Atau pilih salah satu topik berikut:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt.text)}
                className="flex items-center gap-3 py-2 px-3 hover:bg-accent rounded-lg transition-colors text-left group"
              >
                <span className="text-lg">{prompt.emoji}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {prompt.text}
                </span>
              </button>
            ))}
          </div>

          {/* Manual Browsing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 rounded-xl flex items-center gap-3 text-base font-medium"
            >
              <Briefcase size={24} />
              Lihat Lowongan
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 rounded-xl flex items-center gap-3 text-base font-medium"
            >
              <GraduationCap size={24} />
              Lihat Pelatihan & Sertifikat
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-text-secondary mb-4">
            Mulai perjalanan karier Anda bersama AI assistant terpercaya
          </p>
          <Button size="lg" className="px-8">
            Mulai Sekarang
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Homepage;