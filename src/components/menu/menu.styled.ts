import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    background-color: ${props => props.theme.colors.menu};
    border: 1px solid ${props => props.theme.colors.foreground};
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
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