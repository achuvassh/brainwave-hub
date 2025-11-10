import { TooltipContainer } from "@/utils/ToolTipContainer/TooltipContainer"
import { FC, ReactElement } from "react"
import { IButton } from "./ButtonsStyle/IconButton.styled"

interface IIconButtonProps {
    tooltip: string
    children: ReactElement
    onClick: () => void
}

export const IconButton: FC<IIconButtonProps> = ({tooltip, children, onClick}) => {
    return (
        <TooltipContainer tooltip={tooltip}>
            <IButton onClick={onClick}>
                {children}
            </IButton>
        </TooltipContainer>
    )
}