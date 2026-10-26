import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'
import DigitalProjects from '@/components/DigitalProjects'

export const metadata = {
  title: 'Pengalaman & Portofolio | apt. Ufairah Norazizah, S.Farm.',
  description: 'Pengalaman Industri Farmasi, Farmasi Klinik, Distribusi Obat, dan Apotek',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      <DigitalProjects />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} apt. Ufairah Norazizah, S.Farm.. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
