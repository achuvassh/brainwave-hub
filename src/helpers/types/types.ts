import { ReactElement } from "react"

// types

export type SelectorTypes = 'mindmap' | 'text-editor' | 'presentation-editor' | 'chat-bot' | 'messager'

// interfaces

export interface IMenuItems {
    icon: ReactElement,
    tooltip: string,
    section: SelectorTypes
}
