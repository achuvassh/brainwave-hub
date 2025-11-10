import { TooltipContainer } from "@/utils/ToolTipContainer/TooltipContainer"
import { FC, ReactElement } from "react"
import { IButton } from "./ButtonsStyle/IconButton.styled"

interface IIconButtonProps {
    tooltip: string
    children: ReactElement
}

export const IconButton: FC<IIconButtonProps> = ({tooltip, children}) => {
    return (
        <TooltipContainer tooltip={tooltip}>
            <IButton>
                {children}
            </IButton>
        </TooltipContainer>
    )
}