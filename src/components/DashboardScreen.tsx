import { MapPin, Clock, DollarSign, Calendar, Bell, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DashboardScreen = () => {
  const skillsProgress = [
    { skill: 'Culinary Basics', progress: 85, color: 'bg-primary' },
    { skill: 'Food Safety', progress: 70, color: 'bg-secondary' },
    { skill: 'Kitchen Management', progress: 45, color: 'bg-muted-foreground' },
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
    },
    {
      id: 3,
      title: 'Kitchen Assistant',
      company: 'Four Points Makassar',
      location: 'Makassar',
      salary: 'Rp 3.5-4.5 juta',
      type: 'Full-time',
      posted: '3 hari lalu'
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
      type: 'training',
      title: 'Pelatihan Food Safety',
      description: 'Sertifikasi HACCP untuk chef profesional',
      date: '20 Maret 2024',
      location: 'Online'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-6">
        <h1 className="text-2xl font-semibold text-foreground">Career Dashboard</h1>
        <p className="text-sm text-text-secondary mt-1">Track your progress and opportunities</p>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Progress Tracker */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Skills Progress</h2>
          <div className="space-y-4">
            {skillsProgress.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-text-secondary">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-6" variant="outline">
            Lihat Semua Skills
          </Button>
        </section>

        {/* Recommended Jobs */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recommended Jobs</h2>
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="bg-surface-elevated rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-foreground">{job.title}</h3>
                    <p className="text-sm text-text-secondary">{job.company}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Apply
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-4 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={12} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{job.posted}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" variant="outline">
            Lihat Semua Lowongan
          </Button>
        </section>

        {/* Notifications */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-surface-elevated rounded-lg p-4 border border-border">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {notif.type === 'job-fair' ? (
                      <Briefcase size={16} className="text-primary" />
                    ) : (
                      <GraduationCap size={16} className="text-secondary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{notif.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{notif.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-text-secondary">
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
                  <Bell size={16} className="text-text-secondary" />
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