import { Mail, Phone, MapPin, Linkedin, Heart, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              KS<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70">
              Frontend Web Developer building beautiful and responsive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a href="mailto:sharmakamal11601@gmail.com" className="hover:text-accent transition-colors">
                  sharmakamal11601@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a href="tel:+917357510281" className="hover:text-accent transition-colors">
                  +91 7357510281
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="text-accent flex-shrink-0" size={18} />
                <span>Jaipur, India – 302003</span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kamal-sharma-aa3450324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kamalsharmaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/60 flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Kamlesh Kumar Sharma. Made with{' '}
            <Heart className="text-accent fill-accent" size={16} /> in Jaipur, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
