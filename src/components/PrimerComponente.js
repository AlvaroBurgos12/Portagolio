import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export const PrimerComponente = () => {
  const { selectedLang, setSelectedLang } = useLanguage()

  const [openLang, setOpenLang] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const langRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setOpenLang(false)
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpenMenu(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectLang = (lang) => {
    setSelectedLang(lang)
    setOpenLang(false)
  }

  const handleNavClick = (id) => {
    setOpenMenu(false)

    setTimeout(() => {
      const section = document.getElementById(id)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  const t = {
    en: {
      languages: 'Languages',
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    es: {
      languages: 'Idiomas',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    }
  }

  const texts = t[selectedLang] || t.en

  return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
    <div className="w-full" ref={menuRef}>
      <div className="flex items-center justify-between w-full text-sm md:text-base font-semibold h-16 bg-black text-white overflow-hidden px-4 sm:px-6">
        <div className="flex items-center">
          <button
            className="md:hidden mr-3 p-2 hover:bg-gray-900 rounded transition-colors"
            onClick={() => setOpenMenu(prev => !prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <ul className="hidden md:flex gap-6">
              <li><a className="hover:text-cyan-400 transition-colors" href="#about">{texts.about}</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#skills">{texts.skills}</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#projects">{texts.projects}</a></li>
              <li><a className="hover:text-cyan-400 transition-colors" href="#contact">{texts.contact}</a></li>
            </ul>
          </div>

          <div className="pr-2">
            <button
              onClick={() => setOpenLang(prev => !prev)}
              className="hover:text-cyan-400 cursor-pointer flex items-center gap-1 transition-colors text-cyan-400"
            >
              {texts.languages}
              <span className={`text-xs transition-transform duration-200 ${openLang ? 'rotate-180' : ''}`}>▼</span>
            </button>
          </div>
        </div>

        {/* MENU MÓVIL */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-[64px] origin-top
            transition-all duration-200
            ${openMenu ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}
          `}
        >
          <ul
            className="bg-black text-white border-t border-gray-800 py-2 space-y-3"
            style={{ maxHeight: 220, overflowY: 'auto' }}
          >
            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-900 hover:text-cyan-400 transition-colors"
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('about')
                }}
              >
                {texts.about}
              </a>
            </li>

            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-900 hover:text-cyan-400 transition-colors"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('skills')
                }}
              >
                {texts.skills}
              </a>
            </li>

            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-900 hover:text-cyan-400 transition-colors"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('projects')
                }}
              >
                {texts.projects}
              </a>
            </li>

            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-900 hover:text-cyan-400 transition-colors"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('contact')
                }}
              >
                {texts.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* DROPDOWN LANGUAGES */}
        <div
          ref={langRef}
          className={`absolute right-4 top-16 z-50 transform origin-top transition-all duration-150 ${openLang ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}
        >
          <ul className="bg-black text-white shadow-none border-0 min-w-[140px]">
            <li>
              <button onClick={() => handleSelectLang('es')} className="w-full text-left px-4 py-2 hover:bg-gray-900">Español</button>
            </li>
            <li>
              <button onClick={() => handleSelectLang('en')} className="w-full text-left px-4 py-2 hover:bg-gray-900">English</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}






















