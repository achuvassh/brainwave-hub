import { MenuItems } from "@/helpers/vars/vars"
import { IconButton } from "../ui/buttons/IconButton"
import { MenuContainer, MenuItemsContainer, MenuItem } from "./menu.styled"
import { SelectorTypes } from "@/helpers/types/types"
import { LanguageSwitcher } from "@/utils/LangSwitcher/LangSwitcher"

interface IMenuProps {
    switchSection: (section: SelectorTypes) => void    
    selected: string
}

export const Menu: React.FC<IMenuProps> = ({switchSection, selected}) => {
    return (
        <MenuContainer>
            <MenuItemsContainer>
                {MenuItems.map((el, i) => (
                    <MenuItem key={i} $active={selected===el.section}>
                        <IconButton onClick={() => switchSection(el.section)} tooltip={el.tooltip}>{el.icon}</IconButton>
                    </MenuItem>
                ))} 
            </MenuItemsContainer>
            <MenuItemsContainer>
                <LanguageSwitcher />
                
            </MenuItemsContainer>
        </MenuContainer>
    )
}