import React from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { PrimerComponente } from './components/PrimerComponente'
import { AboutMe } from './components/AboutMe'
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
function App() {
  return (
    <LanguageProvider>
      <PrimerComponente />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App


