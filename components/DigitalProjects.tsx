'use client'

const pharmacyTools = [
  {
    number: '01',
    title: "Penulis Jurnal Ilmiah Nasional Terakreditasi Sinta 2",
    description: "Menyelesaikan penelitian tugas akhir yang dipublikasikan dalam jurnal Media Pharmaceutica Indonesiana terakreditasi Sinta 2.",
  },
  {
    number: '02',
    title: "Aktivitas Antibakteri Ekstrak Etil Asetat Daun Tigaron",
    description: "Meneliti aktivitas antibakteri ekstrak etil asetat daun tigaron (Crateva religiosa G.Forst) terhadap Shigella dysenteriae dan Salmonella typhi menggunakan metode difusi sumuran.",
  },
  {
    number: '03',
    title: "Determinasi, Ekstraksi Maserasi & Skrining Fitokimia",
    description: "Melakukan determinasi tanaman, ekstraksi maserasi, dan skrining fitokimia untuk mengidentifikasi senyawa alkaloid, flavonoid, steroid, dan tanin.",
  },
  {
    number: '04',
    title: "Pengujian Mikrobiologi",
    description: "Melaksanakan pengujian mikrobiologi.",
  },
  {
    number: '05',
    title: "Analisis Statistik Nonparametrik",
    description: "Melakukan analisis statistik nonparametrik menggunakan uji Kruskal-Wallis dan Mann-Whitney melalui SPSS.",
  },
]

export default function DigitalProjects() {
  return (
    <section id="digital" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PUBLIKASI — UNIVERSITAS SURABAYA (UBAYA), DESEMBER 2025</p>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-3">Penelitian Tugas Akhir</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Penulis jurnal ilmiah nasional terakreditasi Sinta 2: penelitian tugas akhir yang dipublikasikan dalam jurnal Media Pharmaceutica Indonesiana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pharmacyTools.map((project) => (
            <div
              key={project.number}
              className="relative group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden p-6 min-h-[280px] flex flex-col justify-end hover:border-[var(--muted)] transition-colors"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-[120px] font-black text-[var(--foreground)] opacity-[0.03] leading-none select-none">
                {project.number}
              </span>

              {/* Placeholder icon area */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[var(--card-border)] to-transparent flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--muted)] opacity-40">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <span className="text-[10px] tracking-widest text-emerald-500 font-semibold uppercase mb-1 block">
                  PUBLIKASI #{project.number}
                </span>
                <h3 className="font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
