import { ArrowDown, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a simple resume download - in production, this would link to an actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kamlesh_Kumar_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-up">
          {/* Greeting */}
          <p className="text-accent font-medium mb-4 tracking-wide">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
            Kamlesh Kumar Sharma
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-primary-foreground/80 mb-6">
            Frontend Web Developer
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Building beautiful, responsive, and user-friendly web experiences with{' '}
            <span className="text-accent font-semibold">React.js</span>,{' '}
            <span className="text-accent font-semibold">JavaScript</span>, and{' '}
            <span className="text-accent font-semibold">Tailwind CSS</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handleDownloadResume} className="btn-primary">
              <Download size={20} />
              Download Resume
            </button>
            <button onClick={handleContactClick} className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-primary-foreground/50 hover:text-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
