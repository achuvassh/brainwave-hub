'use client'

import { useThemeContext } from "@/app/providers/ThemeProvider"
import { ThemeSwitcherContainer, ThemeSwitcher, ThemeSwitcherSwitcher } from "./ThemeSwitcher.styled"

export const ThemeSwitcherComponent = () => {
    const {theme, toggleTheme} = useThemeContext()

    const handleToggleTheme = () => {
        toggleTheme()
    }
    console.log(theme, 'ct')
    return (
        <ThemeSwitcherContainer>
            <ThemeSwitcher>
                <ThemeSwitcherSwitcher $theme={theme} onClick={handleToggleTheme} />
            </ThemeSwitcher>
        </ThemeSwitcherContainer>
    )
}