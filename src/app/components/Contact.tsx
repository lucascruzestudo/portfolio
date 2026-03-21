import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@lgcdev.com',
      link: 'mailto:contato@lgcdev.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(13) 99804-8091',
      link: 'tel:+5513998048091'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'lucasgomescruz',
      link: 'https://github.com/lucasgomescruz'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'lucasgomescruz',
      link: 'https://www.linkedin.com/in/lucasgomescruz'
    }
  ];

  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-12 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const isExternal = contact.link.startsWith('http');

          return (
            <a
              key={index}
              href={contact.link}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 no-underline reveal"
              style={{
                background: 'var(--navy2)',
                borderColor: 'var(--border-color)',
                transitionDelay: `${index * 80}ms`,
                minHeight: '88px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
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
                className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0"
                style={{ background: 'var(--brand-glow)' }}
              >
                <Icon size={24} style={{ color: 'var(--brand)' }} />
              </div>

              <div>
                <p
                  className="font-['JetBrains_Mono'] mb-1"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-text)'
                  }}
                >
                  {contact.label}
                </p>
                <p
                  style={{
                    color: 'var(--white)',
                    fontWeight: 500
                  }}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
