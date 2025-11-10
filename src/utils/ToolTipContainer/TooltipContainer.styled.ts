import styled from "styled-components";

export const TTContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`

export const TTText = styled.div<{ $active: boolean }>`
    position: absolute;
    padding: 5px;
    text-align: center;
    font-size: 14px;
    visibility: ${props => props.$active ? 'show' : 'hidden'};
    opacity: ${props => props.$active ? 1 : 0};
    top: -20px;
    width: max-content;
    background-color: ${props => props.theme.colors.tooltip};
    left: 5px;
    border-radius: 10px;
    transition: opacity 0.5s;
    transition-delay: .5s;
`
