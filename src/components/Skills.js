import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export const Skills = () => {
  const { selectedLang } = useLanguage()

  const content = {
    en: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use to build clean and functional applications.',
      frontendTitle: 'Frontend',
      backendTitle: 'Backend',
      toolsTitle: 'Tools, APIs & Databases',
      langsTitle: 'Languages',
      frontend: [
        { name: 'JavaScript (ES6+)', icon: '/icons/javascript.png' },
        { name: 'React', icon: '/icons/react.png' },
        { name: 'HTML5', icon: '/icons/html.png' },
        { name: 'CSS3 / Tailwind', icon: '/icons/tailwind.png' }
      ],
      backend: [
        { name: 'Java', icon: '/icons/java.png' },
        { name: 'C', icon: '/icons/c.png' },
        { name: 'C++', icon: '/icons/cpp.png' },
        { name: 'Node.js (basics)', icon: '/icons/node.png' }
      ],
      tools: [
        { name: 'REST APIs', icon: '/icons/api.png' },
        { name: 'Git', icon: '/icons/git.png' },
        { name: 'Postman', icon: '/icons/postman.png' },
        { name: 'SQL', icon: '/icons/sql.png' },
        { name: 'MongoDB', icon: '/icons/mongodb.png' }
      ],
      langs: [
        { name: 'Spanish (native)', icon: '/icons/spanish.png' },
        { name: 'English (Advanced)', icon: '/icons/english.png' }
      ]
    },
    es: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas que uso para construir aplicaciones limpias y funcionales.',
      frontendTitle: 'Frontend',
      backendTitle: 'Backend',
      toolsTitle: 'Herramientas, APIs & Bases de datos',
      langsTitle: 'Idiomas',
      frontend: [
        { name: 'JavaScript (ES6+)', icon: '/icons/javascript.png' },
        { name: 'React', icon: '/icons/react.png' },
        { name: 'HTML5', icon: '/icons/html.png' },
        { name: 'CSS3 / Tailwind', icon: '/icons/tailwind.png' }
      ],
      backend: [
        { name: 'Java', icon: '/icons/java.png' },
        { name: 'C', icon: '/icons/c.png' },
        { name: 'C++', icon: '/icons/cpp.png' },
        { name: 'Node.js (básico)', icon: '/icons/node.png' }
      ],
      tools: [
        { name: 'APIs REST', icon: '/icons/api.png' },
        { name: 'Git', icon: '/icons/git.png' },
        { name: 'Postman', icon: '/icons/postman.png' },
        { name: 'SQL', icon: '/icons/sql.png' },
        { name: 'MongoDB', icon: '/icons/mongodb.png' }

      ],
      langs: [
        { name: 'Español (nativo)', icon: '/icons/spanish.png' },
        { name: 'Inglés (Avanzado)', icon: '/icons/english.png' }
      ]
    }
  }

  const t = content[selectedLang] || content.en

  const SkillCard = ({ title, items }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-5 text-lg font-bold text-gray-900">{title}</h3>

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition duration-200 hover:bg-cyan-50"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-medium text-gray-700">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-24 bg-gray-50 px-8 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-600">
            {selectedLang === 'es' ? 'Stack técnico' : 'Technical stack'}
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            {t.title}
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SkillCard title={t.langsTitle} items={t.langs} />
          <SkillCard title={t.frontendTitle} items={t.frontend} />
          <SkillCard title={t.backendTitle} items={t.backend} />
          <SkillCard title={t.toolsTitle} items={t.tools} />
        </div>
      </div>
    </section>
  )
}
