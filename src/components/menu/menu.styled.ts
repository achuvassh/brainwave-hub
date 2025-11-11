import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 5%;
    background-color: ${props => props.theme.colors.sidebar};
    border: 1px solid ${props => props.theme.colors.foreground};
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    gap: 100px;
    max-height: fit-content;
`

export const MenuItemsContainerBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: transparent;
`

export const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    background-color: transparent;
`

export const MenuItem = styled.div<{$active: boolean}>`
    svg {
        color: ${props => props.$active ? props.theme.colors.menu_active_tab : props.theme.colors.foreground};
    }
`