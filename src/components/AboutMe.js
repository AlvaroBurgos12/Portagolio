import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export const AboutMe = () => {
  const { selectedLang } = useLanguage()

  const content = {
    en: {
      title: 'About Me',
      label: 'Introduction',
      paragraphs: [
        "Hi — I’m Álvaro Felipe Burgos Hernández from Colombia. I’m 19 years old and currently studying Computer Programming and Analysis (CPA) at Seneca College.",

        "I have experience in backend (Java, C, C++) and frontend (JavaScript, HTML, CSS), with a solid foundation in object-oriented programming and building applications that interact with APIs.",

        "I discovered my passion for programming when I truly understood its fundamentals. Learning the basics made me realize the wide range of things that can be built with code, from simple applications to complete systems, and also helped me understand how many things inside a computer actually work—things I used before without really questioning.",

        "Beyond writing code, I’m interested in understanding the “why” behind solutions, how systems are structured, and how small technical decisions can impact the final outcome of a project.",

        "I enjoy solving problems, learning new technologies, and I am currently building full-stack projects while seeking CO-OP opportunities where I can apply my skills in real-world environments and continue growing as a developer."
      ]
    },

    es: {
      title: 'Sobre mí',
      label: 'Introducción',
      paragraphs: [
        "Hola — soy Álvaro Felipe Burgos Hernández de Colombia. Tengo 19 años y actualmente estudio Computer Programming and Analysis (CPA) en Seneca College.",

        "Tengo experiencia en backend (Java, C, C++) y frontend (JavaScript, HTML, CSS), con una base sólida en programación orientada a objetos y desarrollo de aplicaciones conectadas a APIs.",

        "Descubrí que realmente me apasiona la programación cuando entendí sus fundamentos. Aprender las bases me permitió darme cuenta de todo lo que es posible construir con código, desde aplicaciones hasta sistemas completos, y también me ayudó a entender cómo funcionan muchas cosas dentro de una computadora que antes simplemente usaba sin cuestionar.",

        "Más allá de escribir código, me interesa comprender el “por qué” detrás de las soluciones, cómo se estructuran los sistemas y cómo pequeñas decisiones técnicas pueden impactar el resultado final de un proyecto.",

        "Disfruto resolver problemas, aprender nuevas tecnologías y actualmente estoy construyendo proyectos full-stack mientras busco oportunidades CO-OP donde pueda aplicar mis conocimientos en entornos reales y seguir creciendo como desarrollador."
      ]
    }
  }

  const t = content[selectedLang] || content.en

  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-24 bg-white px-8 py-20"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* TEXT LEFT */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-600">
            {t.label}
          </p>

          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            {t.title}
          </h2>

          {t.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 leading-8 text-gray-700">
              {p}
            </p>
          ))}
        </div>

        {/* IMAGE RIGHT */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 max-w-md">
            <img
  src={
    selectedLang === 'en'
      ? '/images/foto(en).png'
      : '/images/profile.png'
  }
  alt="Alvaro Burgos"
  className="w-full h-auto object-cover transition duration-500 hover:scale-105"
/>
          </div>
        </div>

      </div>
    </section>
  )
}

