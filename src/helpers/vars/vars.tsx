import { IMenuItems } from "../types/types";
import { RiMindMap, RiEditLine, RiSlideshow2Line } from "react-icons/ri"
import { LuBot, LuMessageCircle } from "react-icons/lu";

export const MenuItems: IMenuItems[] = [
    {icon: <RiMindMap size={25} />, tooltip: 'tooltips.mindmap', section: 'mindmap'},
    {icon: <RiEditLine size={25} />, tooltip: 'tooltips.text_editor', section: 'text-editor'},
    {icon: <RiSlideshow2Line size={25} />, tooltip: 'tooltips.presentation_editor', section: 'presentation-editor'},
    {icon: <LuBot size={25} />, tooltip: 'tooltips.chat_bot', section: 'chat-bot'},
    {icon: <LuMessageCircle size={25} />, tooltip: 'tooltips.messager', section: 'messager'}
]
