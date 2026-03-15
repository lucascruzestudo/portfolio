export function Experience() {
  const experiences = [
    {
      company: 'MOSTEN',
      role: 'Dev Fullstack',
      period: 'Fev 2024 — Presente',
      current: true,
      description: 'desenvolvedor fullstack com foco em backend .net (uso de cqrs) e experiência em node.js para integrações e microsserviços. também atuo no frontend com angular e react, construindo interfaces responsivas e cuidando da experiência do usuário. implemento autenticação/autorização seguras, integro apis e modelagem/otimização de bancos de dados (consultas sql, views, procedures).',
      tags: ['.NET', 'CQRS', 'Node.js', 'Angular', 'React', 'SQL']
    },
    {
      company: 'MOSTEN',
      role: 'Estagiário de Dados',
      period: 'Jul 2023 — Fev 2024',
      current: false,
      description: 'Atuação em integração backend e pipelines de dados: implementei processos ETL, protótipos de reconhecimento facial e sistemas de monitoramento. Modelei bases SQL/NoSQL e criei dashboards em Power BI para apoiar decisões; usei Apache Spark e Pandas para processamento em larga escala e provas de conceito de ML. Entrega contínua com Git e Azure DevOps.',
      tags: ['Python', 'Apache Spark', 'Pandas', 'SQL/NoSQL', 'Power BI', 'Git']
    },
    {
      company: 'Porto de Santos',
      role: 'Estagiário de Inovação',
      period: 'Abr 2022 — Jul 2023',
      current: false,
      description: 'Modelagem e otimização de bancos relacionais; desenvolvimento de automações (RPAs) em Python e APIs para integrar dados AIS e operações portuárias. Automatizei coleta e processamento (web scraping, pipelines), documentei soluções e monitorei scripts em servidores Linux em produção, contribuindo para digitalização e melhoria operacional.',
      tags: ['Python', 'RPA', 'APIs', 'SQL', 'Linux']
    }
  ];

  return (
    <section id="experience" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-3 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Experiência
      </h2>
      <p
        className="font-['JetBrains_Mono'] mb-12 reveal"
        style={{ fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.1em' }}
      >
        Profissional
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-2 md:left-5 top-0 bottom-0 w-px"
          style={{ background: 'var(--border-color)' }}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 md:pl-16 group reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[5px] md:left-[13px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300"
                style={{
                  borderColor: 'var(--brand)',
                  background: 'var(--navy)'
                }}
              />

              <div
                className="p-6 rounded-xl border transition-all duration-300"
                style={{
                  background: 'var(--navy2)',
                  borderColor: 'var(--border-color)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.1)';
                  // Acender o dot
                  const dot = e.currentTarget.parentElement?.querySelector('div[class*="absolute"]') as HTMLElement;
                  if (dot) {
                    dot.style.background = 'var(--brand)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                  const dot = e.currentTarget.parentElement?.querySelector('div[class*="absolute"]') as HTMLElement;
                  if (dot) {
                    dot.style.background = 'var(--navy)';
                  }
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="font-['Plus_Jakarta_Sans']"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--white)'
                      }}
                    >
                      {exp.company} — {exp.role}
                    </h3>
                  </div>
                  {exp.current && (
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] border"
                      style={{
                        background: 'var(--brand-glow)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--brand)'
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'var(--brand)',
                          animation: 'blink 2s infinite'
                        }}
                      />
                      atual
                    </span>
                  )}
                </div>

                <p
                  className="font-['JetBrains_Mono'] mb-4"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-text)'
                  }}
                >
                  {exp.period}
                </p>

                <p
                  className="mb-4"
                  style={{
                    color: 'var(--white2)',
                    lineHeight: 1.75
                  }}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
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
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}