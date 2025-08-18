import { MapPin, Clock, DollarSign, Calendar, Bell, Briefcase, GraduationCap, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DashboardScreen = () => {
  const careerProgress = {
    goal: 'Professional Chef',
    progress: 60,
    currentLevel: 'Junior Cook',
    nextMilestone: 'Complete Food Safety Certification'
  };

  const activeCertifications = [
    { name: 'SKKNI Culinary', status: 'Active', validUntil: '2025' },
    { name: 'Food Handling', status: 'Active', validUntil: '2024' },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'Junior Chef',
      company: 'Hotel Santika Jakarta',
      location: 'Jakarta Pusat',
      salary: 'Rp 4.5-6.5 juta',
      type: 'Full-time',
      posted: '2 hari lalu'
    },
    {
      id: 2,
      title: 'Sous Chef',
      company: 'Grand Hyatt Bali',
      location: 'Denpasar, Bali',
      salary: 'Rp 8-12 juta',
      type: 'Full-time',
      posted: '1 minggu lalu'
    }
  ];

  const recommendedTrainings = [
    {
      id: 1,
      title: 'Advanced Culinary Techniques',
      provider: 'Culinary Institute Jakarta',
      duration: '3 months',
      price: 'Rp 2.5 juta',
      type: 'Hybrid'
    },
    {
      id: 2,
      title: 'Hotel Management Basics',
      provider: 'PHRI Training Center',
      duration: '6 weeks',
      price: 'Rp 1.8 juta',
      type: 'Online'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'job-fair',
      title: 'Job Fair Perhotelan 2024',
      description: 'Acara job fair khusus industri perhotelan',
      date: '15 Maret 2024',
      location: 'JCC Jakarta'
    },
    {
      id: 2,
      type: 'certification',
      title: 'Food Safety Certification',
      description: 'Sertifikat akan berakhir dalam 30 hari',
      date: '30 hari lagi',
      location: 'Online renewal'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-6">
        <h1 className="text-2xl font-semibold text-foreground">Career Dashboard</h1>
        <p className="text-sm text-text-secondary mt-1">Track your progress and opportunities</p>
      </header>

      <div className="px-4 py-6 space-y-6 max-w-md mx-auto">
        {/* Progress Tracker Card */}
        <section className="bg-card rounded-2xl p-6 shadow-soft border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10">
              <Target size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Career Progress</h2>
              <p className="text-sm text-text-secondary">{careerProgress.currentLevel}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-foreground">Progress to {careerProgress.goal}</span>
              <span className="text-sm text-primary font-semibold">{careerProgress.progress}%</span>
            </div>
            <Progress value={careerProgress.progress} className="h-3" />
            <p className="text-xs text-text-secondary mt-2">Next: {careerProgress.nextMilestone}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Active Certifications</h3>
            {activeCertifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between bg-surface-elevated rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground">{cert.name}</span>
                </div>
                <span className="text-xs text-text-secondary">Valid until {cert.validUntil}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Jobs & Trainings */}
        <section className="bg-card rounded-2xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recommended for You</h2>
          
          {/* Jobs */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Job Opportunities</h3>
            <div className="space-y-3">
              {recommendedJobs.map((job) => (
                <div key={job.id} className="bg-surface-elevated rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{job.title}</h4>
                      <p className="text-sm text-text-secondary">{job.company}</p>
                    </div>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Apply
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={12} />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trainings */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Training Programs</h3>
            <div className="space-y-3">
              {recommendedTrainings.map((training) => (
                <div key={training.id} className="bg-surface-elevated rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{training.title}</h4>
                      <p className="text-sm text-text-secondary">{training.provider}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                      Join Training
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={12} />
                      <span>{training.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notifications / Upcoming Events */}
        <section className="bg-card rounded-2xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-surface-elevated rounded-xl p-4 border border-border">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 flex-shrink-0">
                    {notif.type === 'job-fair' ? (
                      <Briefcase size={16} className="text-primary" />
                    ) : notif.type === 'certification' ? (
                      <Award size={16} className="text-destructive" />
                    ) : (
                      <GraduationCap size={16} className="text-secondary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">{notif.title}</h3>
                    <p className="text-sm text-text-secondary mt-1 leading-relaxed">{notif.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{notif.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{notif.location}</span>
                      </div>
                    </div>
                  </div>
                  <Bell size={16} className="text-text-secondary flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardScreen;