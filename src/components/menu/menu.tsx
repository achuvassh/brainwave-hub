import { MenuItems } from "@/helpers/vars/vars"
import { IconButton } from "../ui/buttons/IconButton"
import { MenuContainer, MenuItemsContainer } from "./menu.styled"


export const Menu = () => {
    return (
        <MenuContainer>
            <MenuItemsContainer>
                {MenuItems.map((el, i) => (
                    <IconButton key={i} tooltip={el.tooltip}>{el.icon}</IconButton>
                ))} 
            </MenuItemsContainer>
        </MenuContainer>
    )
}