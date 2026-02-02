import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shree Jain College Kekri',
    year: '2024',
    description: 'Completed undergraduate degree with focus on computer science fundamentals, programming, and software development.',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'RBSE Board',
    year: '2021',
    description: 'Completed senior secondary education with science stream.',
  },
  {
    degree: 'Secondary (10th)',
    institution: 'RBSE Board',
    year: '2019',
    description: 'Completed secondary education with distinction.',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Qualifications</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-accent/10 w-fit flex-shrink-0">
                  <GraduationCap className="text-accent" size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  <p className="text-accent font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
