import { useState } from "react";
import { Play, Calendar, MapPin, Clock, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoggedInHomepage = () => {
  const [careerProgress] = useState(65);
  const [trainingProgress] = useState(8);
  const [totalModules] = useState(12);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-foreground">
            Selamat datang kembali! 👋
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Mari lanjutkan perjalanan karir Anda hari ini
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {/* Section 1: Perjalanan Karir Saya */}
        <Card className="border-border shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Target className="text-primary" size={24} />
              Perjalanan Karir Saya
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-surface-elevated rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">
                🧑‍🍳 Chef Hotel Profesional
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Target karir yang sedang Anda kejar
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Progres Keseluruhan</span>
                  <span className="text-sm font-semibold text-primary">{careerProgress}%</span>
                </div>
                <Progress value={careerProgress} className="h-2" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary">
                      Estimasi: 8 bulan tersisa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-green-600" />
                    <span className="text-sm text-foreground">
                      Langkah saat ini: Pelatihan Lanjutan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Progres Latihan */}
        <Card className="border-border shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Play className="text-primary" size={24} />
              Progres Latihan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">
                {trainingProgress} dari {totalModules} modul selesai
              </span>
              <span className="text-sm font-semibold text-primary">
                {Math.round((trainingProgress / totalModules) * 100)}%
              </span>
            </div>
            <Progress value={(trainingProgress / totalModules) * 100} className="h-2" />
            
            {/* Next Module Card */}
            <div className="bg-surface-elevated rounded-lg p-4 mt-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">
                    Modul 9: Teknik Memasak Internasional
                  </h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Pelajari teknik memasak dari berbagai negara dan budaya kuliner dunia
                  </p>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Clock size={14} />
                    <span>Durasi: 2 jam</span>
                  </div>
                </div>
                <Button size="sm" className="ml-4">
                  Mulai
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Nearest Event */}
        <Card className="border-border shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Calendar className="text-primary" size={24} />
              Event Terdekat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    Job Fair Perhotelan & Kuliner 2024
                  </h4>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Calendar size={14} />
                      <span>Sabtu, 25 Januari 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <MapPin size={14} />
                      <span>Jakarta Convention Center</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    Lebih dari 50 hotel dan restoran bintang 5 mencari chef profesional
                  </p>
                </div>
              </div>
              <Button className="w-full md:w-auto">
                Daftar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-14 flex items-center gap-2">
            <Target size={20} />
            <span>Ubah Target Karir</span>
          </Button>
          <Button variant="outline" className="h-14 flex items-center gap-2">
            <Calendar size={20} />
            <span>Lihat Semua Event</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoggedInHomepage;