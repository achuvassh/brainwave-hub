import styled from "styled-components";

export const LangSwitcherContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LangSwitcher = styled.div`
    border: 1px solid ${props => props.theme.colors.light_dark};
    background-color: #fff;
    height: 30px;
    width: 100%;
    border-radius: 50px;
    cursor: pointer;
`

export const LangSwitcherSwitcher = styled.div<{ $lang: string }>`
    width: 20px;
    height: 20px;
    background: url(${props => props.$lang === 'ru' ? '/flags/russia_flag.svg' : '/flags/usa_flag.svg'}) no-repeat center / cover;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    border: 1px solid #000;
    box-shadow: 0 0 3px 3px #000;
    left: ${props => props.$lang === 'ru' ? '5px' : 'calc(100% - 25px)'};
    transition: left 0.4s ease-in-out;
`