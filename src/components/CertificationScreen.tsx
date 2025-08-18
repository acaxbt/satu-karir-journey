import { Download, Share2, Award, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationScreen = () => {
  const certifications = [
    {
      id: 1,
      title: 'SKKNI Tata Boga',
      issuer: 'Kementerian Ketenagakerjaan',
      level: 'Level III',
      status: 'completed',
      date: '15 Februari 2024',
      validUntil: '15 Februari 2027',
      credentialId: 'SKKNI-TB-2024-001'
    },
    {
      id: 2,
      title: 'Food Safety & HACCP',
      issuer: 'BPOM Indonesia',
      level: 'Certified',
      status: 'completed',
      date: '10 Januari 2024',
      validUntil: '10 Januari 2027',
      credentialId: 'HACCP-2024-156'
    },
    {
      id: 3,
      title: 'Hotel Management Basics',
      issuer: 'Indonesian Hotel Association',
      level: 'Foundation',
      status: 'in-progress',
      progress: 75,
      expectedDate: '30 Maret 2024'
    }
  ];

  const userProfile = {
    name: 'Ahmad Wijaya',
    title: 'Aspiring Chef',
    email: 'ahmad.wijaya@email.com',
    skills: ['Culinary Arts', 'Food Safety', 'Kitchen Management', 'Indonesian Cuisine'],
    completedCertifications: 2,
    totalExperience: '1 tahun'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-6">
        <h1 className="text-2xl font-semibold text-foreground">Certification Wallet</h1>
        <p className="text-sm text-text-secondary mt-1">Your digital credentials and achievements</p>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-medium">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-2xl font-bold">{userProfile.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-white/80">{userProfile.title}</p>
              <p className="text-white/60 text-sm">{userProfile.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/80 text-sm">Sertifikat</p>
              <p className="text-xl font-bold">{userProfile.completedCertifications}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Pengalaman</p>
              <p className="text-xl font-bold">{userProfile.totalExperience}</p>
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {userProfile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-surface-elevated text-foreground text-sm rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Digital Certifications */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Digital Badges</h2>
            <Button variant="outline" size="sm">
              <Share2 size={16} className="mr-2" />
              Share Profile
            </Button>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-surface-elevated rounded-lg p-4 border border-border">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    cert.status === 'completed' 
                      ? 'bg-secondary/10' 
                      : 'bg-muted'
                  }`}>
                    {cert.status === 'completed' ? (
                      <Award size={20} className="text-secondary" />
                    ) : (
                      <Clock size={20} className="text-text-secondary" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{cert.title}</h3>
                        <p className="text-sm text-text-secondary">{cert.issuer}</p>
                        <p className="text-xs text-text-secondary mt-1">{cert.level}</p>
                      </div>
                      
                      {cert.status === 'completed' && (
                        <CheckCircle size={20} className="text-secondary" />
                      )}
                    </div>
                    
                    {cert.status === 'completed' ? (
                      <div className="mt-3 text-xs text-text-secondary">
                        <p>Issued: {cert.date}</p>
                        <p>Valid until: {cert.validUntil}</p>
                        <p>ID: {cert.credentialId}</p>
                      </div>
                    ) : (
                      <div className="mt-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-text-secondary">Progress</span>
                          <span className="text-xs text-text-secondary">{cert.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${cert.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-text-secondary mt-2">Expected: {cert.expectedDate}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CV Generation */}
        <section className="bg-card rounded-xl p-6 shadow-soft border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">AI-Generated CV</h2>
          <p className="text-text-secondary mb-4">
            Create a professional CV with your certifications and skills automatically formatted.
          </p>
          <Button className="w-full">
            <Download size={16} className="mr-2" />
            Download CV
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CertificationScreen;