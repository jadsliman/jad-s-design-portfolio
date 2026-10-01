import './TitleAndDescription.css'

type TitleAndDescriptionProps = {
    title?: string,
    description?: string,
    style?: React.CSSProperties
}

function TitleAndDescription({ title, description, style }: TitleAndDescriptionProps) {
    const safeTitle = title ?? '';
    const safeDescription = description ?? '';

    return (
        <>
            <p className="title" style={style}>
                {safeTitle}
            </p>
            <p className="description">{safeDescription}</p>
        </>
    )
}

export default TitleAndDescription;