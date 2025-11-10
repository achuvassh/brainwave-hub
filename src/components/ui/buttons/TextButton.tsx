interface ITextButtonProps {
    text: string
}

export const TextButton: React.FC<ITextButtonProps> = ({text}) => {
    return (
        <button>
            <p>{text}</p>
        </button>
    )
}