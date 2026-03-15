import { Settings2, BarChart3, Users } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: Settings2,
      title: 'Arquitetura',
      description: 'Clean Architecture, CQRS, microsserviços e APIs robustas com foco em escalabilidade.'
    },
    {
      icon: BarChart3,
      title: 'Dados & IA',
      description: 'ETL, Apache Spark, machine learning, reconhecimento facial e mineração de dados.'
    },
    {
      icon: Users,
      title: 'Liderança',
      description: 'Mentoria técnica, revisão de código, coordenação de equipes e deploys em produção.'
    }
  ];

  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-8 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Sobre
      </h2>

      <p
        className="mb-12 max-w-3xl reveal"
        style={{
          color: 'var(--white2)',
          fontSize: '1.125rem',
          lineHeight: 1.75
        }}
      >
        Desenvolvedor Fullstack com forte capacidade analítica e resolução de problemas complexos. 
        Experiente em traduzir requisitos de negócio em soluções escaláveis e robustas, com foco em 
        entrega de valor, qualidade de código e melhoria contínua. Habituado a ambientes dinâmicos 
        e novas tecnologias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
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
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                style={{ background: 'var(--brand-glow)' }}
              >
                <Icon size={24} style={{ color: 'var(--brand)' }} />
              </div>
              <h3
                className="font-['Plus_Jakarta_Sans'] mb-3"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--white)'
                }}
              >
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--white2)', lineHeight: 1.75 }}>
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
