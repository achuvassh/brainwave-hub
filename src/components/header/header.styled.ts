import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 80%;
    margin: 0 auto 40px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px ${props => props.theme.colors.foreground} solid;
    border-top: none;
`

export const HeaderText = styled.p`
    font-size: 30px;
`
export const HeaderTextSoon = styled.p`
    font-size: 20px;
`
