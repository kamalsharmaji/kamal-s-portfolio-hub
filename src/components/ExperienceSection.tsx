import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Web Developer',
    company: 'ATS Global Tech',
    period: 'Oct 2025 – Current',
    description: [
      'Responsive UI development using React.js, HTML, CSS, Tailwind CSS',
      'Creating pixel-perfect UI from Figma/UI designs',
      'REST API integration for dynamic data handling',
      'Bug fixing & performance optimization',
      'Git/GitHub version control for collaboration',
      'Active team collaboration and code reviews',
    ],
    isCurrent: true,
  },
  {
    title: 'Backend Developer',
    company: 'Pace Infotech',
    period: 'Mar 2025 – Sep 2025',
    description: [
      'Basic C# and .NET Framework development',
      'CRUD operations using Entity Framework',
      'MySQL & SQL Server database management',
      'REST API implementation (GET, POST, PUT, DELETE)',
    ],
    isCurrent: false,
  },
  {
    title: 'Internship Training',
    company: 'Pace Infotech',
    period: 'May 2024 – Feb 2025',
    description: [
      'HTML5, CSS3, JavaScript, React.js fundamentals',
      'Functional components & React hooks',
      'API integration techniques',
      'Git & GitHub workflow',
      'Mini & real-time projects development',
    ],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">My Journey</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 top-8 md:top-10">
                <div
                  className={`w-4 h-4 rounded-full border-4 border-background ${
                    exp.isCurrent ? 'bg-accent animate-pulse' : 'bg-accent/60'
                  }`}
                />
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
