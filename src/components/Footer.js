import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  const { selectedLang } = useLanguage()

  const email = 'alfebuhe@gmail.com'
  const github = 'https://github.com/AlvaroBurgos12'
  const linkedin = 'https://www.linkedin.com/in/alvaro-burgos-797385341/'

  const text = {
    en: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      navigation: 'Navigation',
      socials: 'Socials',
      built: 'Built by Alvaro Burgos',
      description: 'Full Stack Developer Portfolio'
    },
    es: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      navigation: 'Navegación',
      socials: 'Redes',
      built: 'Hecho por Alvaro Burgos',
      description: 'Portafolio Full Stack Developer'
    }
  }

  const t = text[selectedLang] || text.en

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white px-8 py-14">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          <div>
            <h3 className="mb-3 text-2xl font-bold">
              Alvaro Burgos
            </h3>

            <p className="mb-5 max-w-sm text-gray-400">
              {t.description}
            </p>

            <div className="h-1 w-20 rounded-full bg-cyan-500"></div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t.navigation}
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#about" className="transition hover:text-cyan-400">
                  {t.about}
                </a>
              </li>

              <li>
                <a href="#skills" className="transition hover:text-cyan-400">
                  {t.skills}
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-cyan-400">
                  {t.projects}
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t.socials}
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-gray-800 px-4 py-3 text-gray-300 transition hover:border-cyan-500 hover:bg-gray-900 hover:text-cyan-400"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-gray-800 px-4 py-3 text-gray-300 transition hover:border-cyan-500 hover:bg-gray-900 hover:text-cyan-400"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-800 px-4 py-3 text-gray-300 transition hover:border-cyan-500 hover:bg-gray-900 hover:text-cyan-400"
                >
                  <FaEnvelope className="text-xl" />
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2026 • {t.built}
        </div>

      </div>
    </footer>
  )
}