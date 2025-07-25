import PersonalInfo from "./PersonalInfo"
import UniversityDegree from "./UniversityDegree"
import AboutSection from "./AboutSection"
import WorkExperience from "./WorkExperience"
import SkillsCompetencies from "./SkillsCompetencies"
import CoursesCarousel from "./CoursesCarousel"
import ExcelDownload from "./ExcelDownload"
import { Download,Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section con fondo negro solo para la foto */}
      <section className="bg-black relative mt-4">
        <div className="max-w-4xl mx-auto">
          {/* Imagen con degradado y contenido superpuesto */}
          <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            <img
              src="/images/foto-perfil.png"
              alt="Daniyer Mendoca - Vigilante de Seguridad"
              className="w-full h-full object-contain object-top"
            />

            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 flex flex-col items-center justify-center text-white text-center px-4 pb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-0 mt-30">Daniyer Mendoca</h1>
              <p className="text-lg md:text-xl font-medium text-white/90 mb-1">Vigilante de Seguridad y Escolta Profesional</p>
              <p className="text-sm md:text-base max-w-2xl text-white/80 leading-relaxed mb-6">
                • Militar Retirado <br/>
                • Lcdo. en Ciencias y Artes Militares<br/>
                • 10 años de experiencia 
              </p>
              <a
                href="/documents/curriculo-daniyer.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-4 border border-white text-white rounded-xl hover:bg-white hover:text-black transition duration-300 text-xs"
    >
                 <Download className="w-5 h-4 " />
                  Descargar CV
              </a>

               <a
                  href="https://www.linkedin.com/in/daniyer-mendoca-2babba313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                   target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 border border-white text-white rounded-xl hover:bg-white hover:text-black transition duration-300 my-4 text-xs"
                >
                 <Linkedin className="w-4 h-4" />
                   Ver mi LinkedIn
                </a>

            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal con fondo claro */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-2 space-y-8">
        <PersonalInfo />
        <UniversityDegree />
        <AboutSection />
        <WorkExperience />
        <SkillsCompetencies />
        <CoursesCarousel />
        <ExcelDownload />
      </div>

      <div className="h-16 bg-gray-900 text-white flex items-center justify-center">
          <p className="text-center text-gray-300 text-sm mt-0">
            "De la exigencia nace la excelencia" <br/>-Daniyer Mendoca</p>
            
        
        </div>

      <footer className="h-16">
          <p className="text-center text-gray-700 text-sm mt-10 mb-0">
            © 2025 Hecho por Maurizio Caballero.</p>
        
        </footer> {/* Espacio para el footer */}
    </div>
  )
}
