import { GraduationCap } from 'lucide-react';

export function Education() {
  const subjects = [
    'Algoritmos e Lógica',
    'Programação Orientada a Objetos',
    'Banco de Dados',
    'Construção de APIs',
    'Engenharia de Software',
    'Segurança da Informação',
    'Redes de Computadores',
    'Gestão de Projetos',
    'Gestão de Equipes',
    'Inteligência Artificial'
  ];

  return (
    <section id="education" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-3 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Formação
      </h2>
      <p
        className="font-['JetBrains_Mono'] mb-12 reveal"
        style={{ fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.1em' }}
      >
        Acadêmica
      </p>

      <div
        className="p-6 rounded-xl border reveal"
        style={{
          background: 'var(--navy2)',
          borderColor: 'var(--border-color)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-hover)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-lg shrink-0"
            style={{ background: 'var(--brand-glow)' }}
          >
            <GraduationCap size={28} style={{ color: 'var(--brand)' }} />
          </div>

          <div className="flex-1">
            <h3
              className="font-['Plus_Jakarta_Sans'] mb-1"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--white)'
              }}
            >
              Tecnologia em Análise e Desenvolvimento de Sistemas
            </h3>

            <p
              className="mb-2"
              style={{
                color: 'var(--white2)',
                lineHeight: 1.75
              }}
            >
              FATEC Rubens Lara
            </p>

            <p
              className="font-['JetBrains_Mono'] mb-4"
              style={{
                fontSize: '0.875rem',
                color: 'var(--muted-text)'
              }}
            >
              Mar 2021 — Dez 2024
            </p>

            <p style={{ color: 'var(--white2)', lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Formação sólida em desenvolvimento de soluções web: lógica de programação, bancos de dados, construção de APIs, segurança da informação, engenharia de software, redes e liderança de equipes. Laboratórios e projetos práticos com foco em sistemas robustos, usáveis e seguros.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, i) => (
            <span
              key={i}
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
              {subject}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
