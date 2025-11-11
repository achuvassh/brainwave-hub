'use client'

import { useLangContext } from "@/app/providers/LangProvider"
import Image from "next/image"
import { LangSwitcherContainer, LangSwitcherInput, LangSwitcher, LangSwitcherSwitcher } from "./LangSwitcher.styled"

export const LanguageSwitcher = () => {
    const {currentLang, setLang} = useLangContext()

    const toggleLang = () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru'
        setLang(newLang)
    }

    return (
        <LangSwitcherContainer>
            <LangSwitcherInput type='checkbox' />
            <LangSwitcher>
                <LangSwitcherSwitcher $lang={currentLang} onClick={toggleLang} />
            </LangSwitcher>
        </LangSwitcherContainer>
    )
}
