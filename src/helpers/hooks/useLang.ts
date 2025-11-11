import { useState, useEffect, useCallback } from 'react'
import { RU, EN } from '../locales'
import { ILangTypes } from '../types/types'

export const useLang = () => {
  const getDefaultLang = (): string => {
    const browserLang = navigator.language.split('-')[0]
    return ['ru', 'en'].includes(browserLang) ? browserLang : 'en'
  }

  const [currentLang, setCurrentLang] = useState<string>(() => {
    return localStorage.getItem('lang') || getDefaultLang()
  })

  useEffect(() => {
    localStorage.setItem('lang', currentLang)
  }, [currentLang])

  const setLang = useCallback((lang: string) => {
    if (!['ru', 'en'].includes(lang)) return
    setCurrentLang(lang)
  }, [])

  const t = useCallback(
    (id: string): string => {
      const [group, key] = id.split('.')
      const langObj = currentLang === 'ru' ? (RU as ILangTypes) : (EN as ILangTypes)
      return langObj[group]?.[key] ?? id
    },
    [currentLang]
  )

  return { t, currentLang, setLang }
}
