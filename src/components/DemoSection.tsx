import { Github, ExternalLink } from 'lucide-react';
import carifyDemo from '@/assets/carify-demo.png';
import carifyMobile from '@/assets/carify-mobile.png';
import atsDemo from '@/assets/ats-demo.png';

const demos = [
  {
    title: 'ATS Global Tech',
    image: atsDemo,
    description: 'Company website with modern UI and responsive design',
    link: 'https://atsglobaltech.in/',
  },
  {
    title: 'Carify Dashboard',
    image: carifyDemo,
    description: 'Vehicle inspection ERP dashboard with analytics',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
  },
  {
    title: 'Carify Mobile View',
    image: carifyMobile,
    description: 'Fully responsive mobile-first design',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
  },
];

const DemoSection = () => {
  return (
    <section id="demos" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Project Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Demo Images
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Screenshots from my recent projects showcasing UI/UX design and development work
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <a
              key={index}
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {demo.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {demo.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/kamalsharmaji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors group"
          >
            <Github size={24} />
            <span>View More on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
