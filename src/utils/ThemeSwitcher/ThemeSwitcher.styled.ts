import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ThemeSwitcher = styled.div`
    border: 1px solid ${props => props.theme.colors.light_dark};
    background-color: #fff;
    height: 30px;
    width: 100%;
    border-radius: 50px;
`

export const ThemeSwitcherSwitcher = styled.div<{ $theme: string }>`
    width: 20px;
    height: 20px;
    background: url(${props => props.$theme === 'light' ? '/theme_icons/sun.svg' : '/theme_icons/moon.svg'}) no-repeat center / cover;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    left: ${props => props.$theme === 'light' ? '5px' : 'calc(100% - 25px)'};
    transition: left 0.4s ease-in-out;
    cursor: pointer;
`