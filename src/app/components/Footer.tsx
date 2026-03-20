export function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        <p
          className="text-center font-['JetBrains_Mono']"
          style={{
            fontSize: '12px',
            color: 'var(--muted-text)'
          }}
        >
          <span style={{ color: 'var(--brand)' }}>lgcdev.com</span> — feito com precisão técnica & atenção ao detalhe
        </p>
      </div>
    </footer>
  );
}
