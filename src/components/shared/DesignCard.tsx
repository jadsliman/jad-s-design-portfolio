import { useParams } from 'react-router';
import './DesignCard.css'

function DesignCard({ image, description, onClick, style }: { image: string, description?: string, onClick: () => void, style?: React.CSSProperties }) {
    const { designType } = useParams();

    return (
        <>
            <div className="card-container" onClick={onClick} style={style}>
                <img className='card-image' src={image} />
                <p
                    className='card-description'
                    style={{ fontSize: designType === 'others' ? '24px' : '16px' }}
                >{description ?? ''}</p>
            </div>
        </>
    )
}

export default DesignCard;