'use client'

import { FC, ReactElement, useState } from "react"
import { TTContainer, TTText } from "./TooltipContainer.styled"

interface ITooltipContainerProps {
    tooltip: string
    children: ReactElement
}

export const TooltipContainer: FC<ITooltipContainerProps> = ({tooltip, children}) => {
    const [active, setActive] = useState<boolean>(false)
    const handleMouseEnter = () => {
        setActive(true)
    }

    const handleMouseLeave = () => {
        setActive(false)
    }
    
    return (
        <TTContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <TTText $active={active}>{tooltip}</TTText>
            {children}
        </TTContainer>
    )
}