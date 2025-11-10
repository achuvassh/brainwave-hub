import { IMenuItems } from "../types/types";
import { RiMindMap, RiEditLine, RiSlideshow2Line } from "react-icons/ri"
import { LuBot, LuMessageCircle } from "react-icons/lu";

export const MenuItems: IMenuItems[] = [
    {icon: <RiMindMap size={25} />, tooltip: 'MindMap', section: 'mindmap'},
    {icon: <RiEditLine size={25} />, tooltip: 'Text-Editor', section: 'text-editor'},
    {icon: <RiSlideshow2Line size={25} />, tooltip: 'Presentation-Editor', section: 'presentation-editor'},
    {icon: <LuBot size={25} />, tooltip: 'Chat-Bot', section: 'chat-bot'},
    {icon: <LuMessageCircle size={25} />, tooltip: 'Messenger', section: 'messager'}
]
