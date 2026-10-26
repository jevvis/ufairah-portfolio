'use client'

const techPalette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-sky-700', 'bg-violet-600', 'bg-orange-600', 'bg-green-700']

// warna lencana dipilih konsisten dari teksnya, jadi tag baru otomatis mendapat warna tanpa perlu didaftarkan
const techColor = (tech: string) => techPalette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % techPalette.length]

const projects = [
  {
    number: '01',
    title: 'Pengujian Sampel & Kualifikasi Instrumen Laboratorium',
    description: 'Mendukung kegiatan QA, QC, dan produksi melalui pengujian sampel bahan baku, produk antara, dan produk jadi, serta kualifikasi instrumen laboratorium.',
    framework: 'INDUSTRI FARMASI — FARMASI KEPOLISIAN PUSDOKKES POLRI',
    techStack: ['Industri Farmasi', 'Quality Control', 'Kualifikasi Instrumen'],
    link: '#',
  },
  {
    number: '02',
    title: 'Pemantauan Clean Room, Investigasi OOS & Manajemen Risiko Mutu',
    description: 'Memantau lingkungan clean room serta mempelajari investigasi Out of Specification (OOS), quality risk management, dan validasi proses manufaktur untuk menjaga konsistensi mutu, keamanan, dan efikasi obat.',
    framework: 'INDUSTRI FARMASI — FARMASI KEPOLISIAN PUSDOKKES POLRI',
    techStack: ['Clean Room', 'OOS', 'Quality Risk Management'],
    link: '#',
  },
  {
    number: '03',
    title: 'Skrining Resep & Unit Dose Dispensing',
    description: 'Berpartisipasi dalam pelayanan obat dengan sistem Unit Dose Dispensing (UDD) serta skrining resep dari aspek administratif, farmasetik, dan klinis untuk mencegah medication error.',
    framework: 'FARMASI KLINIK — RSUD ULIN BANJARMASIN',
    techStack: ['Farmasi Klinik', 'Unit Dose', 'Skrining Resep'],
    link: '#',
  },
  {
    number: '04',
    title: 'Analisis Kasus Pasien dengan Metode SOAP & Identifikasi DRP',
    description: 'Menganalisis kasus pasien menggunakan metode SOAP untuk mengidentifikasi Drug-Related Problems (DRP).',
    framework: 'FARMASI KLINIK — RSUD ULIN BANJARMASIN',
    techStack: ['SOAP', 'DRP', 'Farmasi Klinik'],
    link: '#',
  },
  {
    number: '05',
    title: 'KIE, Pemantauan Terapi Obat & Rekonsiliasi Obat',
    description: 'Memberikan Komunikasi, Informasi, dan Edukasi (KIE) kepada pasien serta berpartisipasi dalam Pemantauan Terapi Obat (PTO) dan rekonsiliasi obat.',
    framework: 'FARMASI KLINIK — RSUD ULIN BANJARMASIN',
    techStack: ['KIE', 'PTO', 'Rekonsiliasi Obat'],
    link: '#',
  },
  {
    number: '06',
    title: 'Pengelolaan Obat: FIFO/FEFO, High Alert, LASA & Cold Chain',
    description: 'Mempelajari pengelolaan obat berdasarkan prinsip FIFO/FEFO, penyimpanan obat High Alert dan LASA, serta evaluasi penyimpangan Cold Chain Product (CCP).',
    framework: 'PENGELOLAAN SEDIAAN — RSUD ULIN BANJARMASIN',
    techStack: ['FIFO / FEFO', 'High Alert & LASA', 'Cold Chain'],
    link: '#',
  },
  {
    number: '07',
    title: 'Operasional Gudang Farmasi: Receiving, Penyimpanan, Picking & Packing',
    description: 'Mendukung penerimaan barang, pemeriksaan kondisi fisik dan dokumen, penyimpanan berdasarkan prinsip FIFO/FEFO, serta penyiapan pesanan (picking dan packing).',
    framework: 'DISTRIBUSI OBAT — PBF PT PENTA VALENT',
    techStack: ['Distribusi Obat', 'CDOB', 'FIFO / FEFO'],
    link: '#',
  },
  {
    number: '08',
    title: 'Pemeriksaan Dokumen Penerimaan (CoA) & Cold Chain Management',
    description: 'Memeriksa kelengkapan dokumen penerimaan termasuk Certificate of Analysis (CoA), serta membantu pemantauan suhu dan kualifikasi tempat penyimpanan, termasuk pengelolaan rantai dingin.',
    framework: 'DISTRIBUSI OBAT — PBF PT PENTA VALENT',
    techStack: ['Certificate of Analysis', 'Cold Chain', 'Kualifikasi Penyimpanan'],
    link: '#',
  },
  {
    number: '09',
    title: 'Pelayanan Resep, Peracikan & KIE di Puskesmas',
    description: 'Mendukung penerimaan resep, penyiapan dan peracikan obat, serta penyerahan obat sesuai prosedur disertai KIE tentang aturan pakai dan dosis untuk mendukung kepatuhan pengobatan.',
    framework: 'PELAYANAN PRIMER — PUSKESMAS SUNGAI BESAR',
    techStack: ['Puskesmas', 'Peracikan', 'KIE'],
    link: '#',
  },
  {
    number: '10',
    title: 'Logistik Farmasi Puskesmas: Kartu Stok, LPLPO & Pusling',
    description: 'Membantu pencatatan kartu stok, penerimaan obat berdasarkan LPLPO, pemantauan ketersediaan obat, serta berpartisipasi dalam program Puskesmas Keliling (Pusling).',
    framework: 'PELAYANAN PRIMER — PUSKESMAS SUNGAI BESAR',
    techStack: ['Kartu Stok', 'LPLPO', 'Pusling'],
    link: '#',
  },
  {
    number: '11',
    title: 'Skrining Resep, Peracikan & KIE di Apotek',
    description: 'Mendukung pelayanan kefarmasian melalui skrining resep, penyiapan dan peracikan obat (compounding), serta penyerahan obat disertai KIE tentang aturan pakai, dosis, dan penyimpanan.',
    framework: 'FARMASI KOMUNITAS — APOTEK KIMIA FARMA',
    techStack: ['Farmasi Komunitas', 'Compounding', 'KIE'],
    link: '#',
  },
  {
    number: '12',
    title: 'Aplikasi Kasir (POS), Laporan Kas Harian & Stock Opname',
    description: 'Mengoperasikan aplikasi kasir (Point of Sale/POS) untuk transaksi tunai dan non-tunai, menyusun rekapitulasi laporan kas harian, serta berpartisipasi dalam stock opname berkala.',
    framework: 'FARMASI KOMUNITAS — APOTEK KIMIA FARMA',
    techStack: ['POS', 'Stock Opname', 'Laporan Kas'],
    link: '#',
  },
  {
    number: '13',
    title: 'Pelayanan Resep & Patient Safety di Apotek',
    description: 'Mendukung pelayanan kefarmasian dengan memperhatikan patient safety dan ketepatan penggunaan obat, serta mempelajari alur pelayanan dan pengelolaan obat.',
    framework: 'FARMASI KOMUNITAS — APOTEK BANUA MEDIKA',
    techStack: ['Farmasi Komunitas', 'Patient Safety', 'Pelayanan Resep'],
    link: '#',
  },
  {
    number: '14',
    title: 'Koordinasi Eksternal sebagai Menteri Luar Negeri BEM',
    description: 'Menjalin komunikasi dan koordinasi dengan pihak eksternal, mendukung kerja sama dan kegiatan kolaboratif, serta mengoordinasikan komunikasi eksternal untuk program kerja BEM.',
    framework: 'ORGANISASI MAHASISWA — BEM UNIVERSITAS BORNEO LESTARI',
    techStack: ['BEM UBL', 'Koordinasi', 'Kerja Sama'],
    link: '#',
  },
  {
    number: '15',
    title: 'Ketua Pelaksana Sosialisasi Pencegahan Stunting',
    description: 'Mengoordinasikan persiapan dan pelaksanaan sosialisasi bertema "Implementasi Generasi Remaja Mencegah Stunting" serta mendukung edukasi pencegahan stunting kepada remaja.',
    framework: 'KEPANITIAAN — UNIVERSITAS BORNEO LESTARI',
    techStack: ['Ketua Pelaksana', 'Edukasi', 'Stunting'],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PENGALAMAN MAGANG & ORGANISASI</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Industri, Klinik & Organisasi</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rekam jejak magang di industri farmasi, rumah sakit, distribusi obat, puskesmas, dan apotek, serta pengalaman organisasi kemahasiswaan.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
