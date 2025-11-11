'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useLang } from '@/helpers/hooks/useLang'

interface ILangContext {
  t: (id: string) => string
  currentLang: string
  setLang: (lang: string) => void
}

const LangContext = createContext<ILangContext | null>(null)

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const { t, currentLang, setLang } = useLang()

  return (
    <LangContext.Provider value={{ t, currentLang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLangContext должен использоваться внутри LangProvider')
  }
  return context
}
