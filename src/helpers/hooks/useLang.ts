import { useState, useEffect } from 'react'
import { RU, EN } from '../locales'
import { ILangTypes } from '../types/types'

export const useLang = () => {
    const getDefaultLang = (): string => {
        const browserLang = navigator.language.split('-')[0]
        let lang
        switch (browserLang) {
            case 'ru':
                lang = 'ru'
                break
            case 'en':
                lang = 'en'
                break
            default: 
                lang = 'en'
                break
        }
        return lang
    }

    const [currentLang, setCurrentLang] = useState<string>(getDefaultLang())

    useEffect(() => {
        const storedLang = localStorage.getItem('lang')
        if (storedLang) {
            setCurrentLang(storedLang)
        }
    }, [])

    const setLang = (lang: string) => {
        localStorage.setItem('lang', lang)
        setCurrentLang(lang)
    }

    const t = (id: string) => {
        let translated_text: string

        if (currentLang === 'ru') {
            const ruObj = RU as ILangTypes
            translated_text = ruObj[id.split('.')[0]][id.split('.')[1]] || id
        } else {
            const enObj = EN as ILangTypes
            translated_text = enObj[id.split('.')[0]][id.split('.')[1]] || id
        }

        return translated_text
    }

    return { t, currentLang, setLang }
}
