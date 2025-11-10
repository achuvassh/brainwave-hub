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
`
