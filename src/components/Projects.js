import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export const Projects = () => {
  const { selectedLang } = useLanguage()

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  const githubUsername = 'AlvaroBurgos12'

  const projectImages = {
    'mealkit-fullstack-platform': '/projects/mealkit.png'
  }

  const projectLiveLinks = {
    'mealkit-fullstack-platform':
      'https://web-322-afbh-ncc-assignment02-lrum.vercel.app/mealkits'
  }

  const topicColors = [
    'bg-cyan-100 text-cyan-700',
    'bg-blue-100 text-blue-700',
    'bg-purple-100 text-purple-700',
    'bg-green-100 text-green-700',
    'bg-orange-100 text-orange-700',
    'bg-pink-100 text-pink-700',
    'bg-indigo-100 text-indigo-700'
  ]

  const getTopicColor = (index) =>
    topicColors[index % topicColors.length]

  const text = {
    en: {
      title: 'Projects',
      subtitle: 'Some repositories from my GitHub profile.',
      viewRepo: 'View Repo',
      download: 'Download ZIP',
      liveDemo: 'Live Demo',
      loading: 'Loading projects...',
      noDescription: 'No description available.',
      preview: 'Click to view project screenshot'
    },

    es: {
      title: 'Proyectos',
      subtitle: 'Algunos repositorios de mi perfil de GitHub.',
      viewRepo: 'Ver Repo',
      download: 'Descargar ZIP',
      liveDemo: 'Visitar Sitio',
      loading: 'Cargando proyectos...',
      noDescription: 'No hay descripción disponible.',
      preview: 'Click para ver captura del proyecto'
    }
  }

  const t = text[selectedLang] || text.en

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github+json'
        }
      }
    )
      .then(res => res.json())


      .then(data => {
        const filteredRepos = data.filter(
  repo => repo.name === 'mealkit-fullstack-platform'
)

        setRepos(filteredRepos)
        setLoading(false)
      })
      .catch(() => {
        setRepos([])
        setLoading(false)
      })
  }, [])

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-24 bg-white px-8 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-600">
            GitHub
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            {t.title}
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        {loading ? (
          <p className="text-gray-600">
            {t.loading}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {repos.map(repo => (
              <div
                key={repo.id}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {repo.name}
                </h3>

                <p className="mb-5 min-h-[72px] text-sm leading-relaxed text-gray-600">
                  {repo.description || t.noDescription}
                </p>

                {projectImages[repo.name] && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(projectImages[repo.name])
                    }
                    className="group mb-5 w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left"
                  >
                    <img
                      src={projectImages[repo.name]}
                      alt={repo.name}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <p className="px-3 py-2 text-xs font-medium text-gray-500">
                      {t.preview}
                    </p>
                  </button>
                )}

                <p className="mb-3 text-sm font-semibold text-gray-700">
                  {selectedLang === 'es'
                    ? 'Tecnologías usadas en el proyecto:'
                    : 'Tech Stack:'}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {repo.topics?.length > 0 ? (
                    repo.topics.map((topic, index) => (
                      <span
                        key={topic}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getTopicColor(index)}`}
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    repo.language && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getTopicColor(0)}`}
                      >
                        {repo.language}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-3">

                  {projectLiveLinks[repo.name] && (
                    <a
                      href={projectLiveLinks[repo.name]}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
                    >
                      {t.liveDemo}
                    </a>
                  )}

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    {t.viewRepo}
                  </a>

                  <a
                    href={`${repo.html_url}/archive/refs/heads/${repo.default_branch}.zip`}
                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
                  >
                    {t.download}
                  </a>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project preview"
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  )
}