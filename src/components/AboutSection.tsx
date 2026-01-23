import { MapPin, Mail, Phone, Linkedin, Code2, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Know Me Better
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              I'm <span className="text-accent">Kamlesh Kumar Sharma</span>,<br />
              a Frontend Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experienced Frontend Web Developer with expertise in{' '}
              <strong className="text-foreground">React.js, JavaScript, HTML, CSS, and Tailwind CSS</strong>. 
              I have a strong foundation in building responsive user interfaces, integrating APIs, 
              and optimizing application performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With basic backend knowledge in <strong className="text-foreground">C# and .NET</strong>, 
              I bring a well-rounded perspective to web development. I thrive in collaborative 
              environments and am passionate about creating pixel-perfect, user-friendly experiences.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-accent flex-shrink-0" size={20} />
                <span>Jaipur, India – 302003</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <a href="mailto:sharmakamal11601@gmail.com" className="hover:text-accent transition-colors truncate">
                  sharmakamal11601@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <a href="tel:+917357510281" className="hover:text-accent transition-colors">
                  +91 7357510281
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="text-accent flex-shrink-0" size={20} />
                <a
                  href="https://www.linkedin.com/in/kamal-sharma-aa3450324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right - Stats/Highlights */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              {/* Stat Card 1 */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Code2 className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      2+ Years Experience
                    </h4>
                    <p className="text-muted-foreground">
                      Hands-on experience in frontend development with React.js and modern web technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Users className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      Team Collaboration
                    </h4>
                    <p className="text-muted-foreground">
                      Skilled in working with cross-functional teams using Git/GitHub for version control.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Zap className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      Performance Focused
                    </h4>
                    <p className="text-muted-foreground">
                      Dedicated to bug fixing, performance optimization, and delivering pixel-perfect UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
