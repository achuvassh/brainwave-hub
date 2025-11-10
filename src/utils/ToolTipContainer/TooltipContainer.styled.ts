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
    display: ${props => props.$active ? 'block' : 'none'};
    top: -10px;
    width: max-content;
    background-color: ${props => props.theme.colors.tooltip};
    padding: 5px;
    left: 5px;
    border-radius: 10px;
`
