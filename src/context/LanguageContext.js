import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('selectedLang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('selectedLang', selectedLang)
  }, [selectedLang])

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
