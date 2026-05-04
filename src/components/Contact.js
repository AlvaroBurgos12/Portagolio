import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'

export const Contact = () => {
  const { selectedLang } = useLanguage()
  const form = useRef()
  const [status, setStatus] = useState('')

  const email = 'alfebuhe@gmail.com'
  const github = 'https://github.com/AlvaroBurgos12'
  const linkedin = 'https://www.linkedin.com/in/alvaro-burgos-797385341/'

  const SERVICE_ID = 'service_vwx1lgs'
  const TEMPLATE_ID = 'template_qpw6eti'
  const PUBLIC_KEY = 'nxE06Wi-jDu2fROSM'

  const text = {
    en: {
      label: 'Contact',
      title: 'Let’s build something together.',
      description:
        'I’m currently open to CO-OP opportunities, internships, junior developer roles, and collaborative projects. Feel free to reach out if you want to connect or work together.',
      emailMe: 'Email Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully.',
      error: 'Something went wrong. Please try again.',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderMessage: 'Write your message...'
    },
    es: {
      label: 'Contacto',
      title: 'Construyamos algo juntos.',
      description:
        'Actualmente estoy abierto a oportunidades CO-OP, internships, roles junior developer y proyectos de colaboración. Puedes contactarme si quieres conectar o trabajar juntos.',
      emailMe: 'Enviar Email',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente.',
      error: 'Algo salió mal. Inténtalo de nuevo.',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tu@email.com',
      placeholderMessage: 'Escribe tu mensaje...'
    }
  }

  const t = text[selectedLang] || text.en

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus(t.sending)

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY
      })
      .then(
        () => {
          setStatus(t.success)
          form.current.reset()
        },
        () => {
          setStatus(t.error)
        }
      )
  }

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-24 bg-black px-8 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 md:grid-cols-2">

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">
            {t.label}
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            {t.title}
          </h2>

          <p className="mb-10 max-w-xl leading-8 text-gray-300">
            {t.description}
          </p>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-7 shadow-lg">
            <p className="mb-6 text-lg font-semibold text-gray-200">
              {email}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-400"
              >
                {t.emailMe}
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-950 via-slate-950 to-cyan-950 p-8 shadow-2xl"
        >
          <label className="mb-2 block text-sm font-semibold text-gray-300">
            {t.name}
          </label>
          <input
            name="user_name"
            type="text"
            required
            placeholder={t.placeholderName}
            className="mb-5 w-full rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
          />

          <label className="mb-2 block text-sm font-semibold text-gray-300">
            {t.email}
          </label>
          <input
            name="user_email"
            type="email"
            required
            placeholder={t.placeholderEmail}
            className="mb-5 w-full rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
          />

          <label className="mb-2 block text-sm font-semibold text-gray-300">
            {t.message}
          </label>
          <textarea
            name="message"
            rows="6"
            required
            placeholder={t.placeholderMessage}
            className="mb-6 w-full resize-none rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            {t.send}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-cyan-300">
              {status}
            </p>
          )}
        </form>

      </div>
    </section>
  )
}