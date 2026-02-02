const skills = [
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'TypeScript (Basic)', category: 'Frontend' },
  { name: 'C# (Basic)', category: 'Backend' },
  { name: '.NET (Basic)', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'CRUD Operations', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Figma to UI', category: 'Tools' },
  { name: 'Responsive Design', category: 'Frontend' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { title: 'Frontend', count: 6, color: 'bg-accent' },
            { title: 'Backend', count: 3, color: 'bg-primary' },
            { title: 'Database', count: 1, color: 'bg-teal-dark' },
            { title: 'Tools', count: 2, color: 'bg-navy-light' },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-lg border border-border"
            >
              <div className={`w-12 h-12 ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl`}>
                {category.count}
              </div>
              <h4 className="font-display font-bold text-foreground">{category.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">Skills</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
