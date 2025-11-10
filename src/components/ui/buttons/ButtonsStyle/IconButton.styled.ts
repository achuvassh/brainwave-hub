import styled from "styled-components";

export const IButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    
    svg {
        color: ${props => props.theme.colors.foreground}
    }
`