export function Skills() {
  const skillGroups = [
    {
      title: 'Backend',
      skills: ['.NET Core', 'C#', 'Node.js', 'Web APIs', 'CQRS', 'Microsserviços', 'Clean Architecture']
    },
    {
      title: 'Frontend & Mobile',
      skills: ['Angular', 'React', 'Flutter']
    },
    {
      title: 'Dados & IA',
      skills: ['Python', 'Apache Spark', 'Pandas', 'Machine Learning', 'ETL', 'Reconhecimento Facial', 'Mineração de Dados']
    },
    {
      title: 'Banco de Dados',
      skills: ['SQL Server', 'Views & Triggers', 'Procedures', 'Otimização', 'NoSQL']
    },
    {
      title: 'DevOps & Infra',
      skills: ['Azure DevOps', 'Git', 'CI/CD', 'Windows Server', 'Linux']
    },
    {
      title: 'Domínios',
      skills: ['Autenticação/Autorização', 'RPA', 'AIS', 'Integrações', 'Power BI']
    }
  ];

  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-12 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border transition-all duration-300 reveal"
            style={{
              background: 'var(--navy2)',
              borderColor: 'var(--border-color)',
              transitionDelay: `${index * 80}ms`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3
              className="font-['JetBrains_Mono'] mb-4"
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--brand)',
                letterSpacing: '0.08em'
              }}
            >
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 rounded-md text-sm border transition-all duration-200"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--white2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--brand-glow)';
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.color = 'var(--brand2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'var(--white2)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
