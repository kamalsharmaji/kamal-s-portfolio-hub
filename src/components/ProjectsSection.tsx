import { ExternalLink, Globe, Users, Car, Building2 } from 'lucide-react';

const projects = [
  {
    title: 'ATS Global Tech Website',
    description: 'Company website UI updates and enhancements based on client requirements. Focused on responsive design and modern UI patterns.',
    icon: Globe,
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    status: 'Completed',
    link: 'https://atsglobaltech.in/',
  },
  {
    title: 'HRMS – Human Resource Management',
    description: 'Comprehensive UI design and frontend development for HR management screens including employee dashboards, leave management, and reporting modules.',
    icon: Users,
    tags: ['React.js', 'UI/UX', 'Dashboard'],
    status: 'Completed',
    link: null,
  },
  {
    title: 'HRMS – Hotel & Restaurant Management',
    description: 'Team-based collaborative project featuring dashboard & management UI screens for hotel and restaurant operations.',
    icon: Building2,
    tags: ['React.js', 'Team Project', 'CRUD'],
    status: 'Completed',
    link: 'https://hms-five-xi.vercel.app/',
  },
  {
    title: 'Carify – PDI ERP Model',
    description: 'ERP-based UI Design with vehicle inspection and management modules. Building scalable and maintainable frontend architecture.',
    icon: Car,
    tags: ['React.js', 'ERP', 'Tailwind CSS'],
    status: 'In Progress',
    link: 'https://carify-p42v.vercel.app/dashboard/inspection',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border card-hover relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'In Progress'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Icon */}
              <div className="p-4 rounded-2xl bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                <project.icon className="text-accent" size={32} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all hover:text-accent/80"
                >
                  <span>View Details</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <span>Details Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
