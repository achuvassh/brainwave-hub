'use client'

import { useThemeContext } from "@/app/providers/ThemeProvider"
import { ThemeSwitcherContainer, ThemeSwitcher, ThemeSwitcherSwitcher } from "./ThemeSwitcher.styled"

export const ThemeSwitcherComponent = () => {
    const {theme, toggleTheme} = useThemeContext()

    const handleToggleTheme = () => {
        toggleTheme()
    }

    return (
        <ThemeSwitcherContainer>
            <ThemeSwitcher onClick={handleToggleTheme}>
                <ThemeSwitcherSwitcher $theme={theme}/>
            </ThemeSwitcher>
        </ThemeSwitcherContainer>
    )
}