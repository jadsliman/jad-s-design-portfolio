import { Link, useParams } from 'react-router';
import TitleAndDescription from '../shared/TitleAndDescription';
import { posters, socialMedia } from "../../data/data";
import './PosterDesignReview.css'

function PosterDesignReview() {
    const { designType, designName } = useParams<{ designType: string; designName: string }>();
    const designs = designType === 'social-media' ? socialMedia : designType === 'posters' ? posters : null;
    const design = designs!.find((design) => design.title?.toLowerCase().replace(/\s+/g, '-') === designName);

    return (
        <>
            <TitleAndDescription
                title={design!.title}
                description={design!.shortDescription}
                style={{ marginTop: '125px' }}
            />
            <div className='poster-review-container'>
                <img src={`/${design!.image}`} className='poster-img' />
                <p className='full-poster-description'>{design!.fullDescription}</p>
                <p className='poster-date'>Design Date: {design!.date}</p>
                <Link className='back-button' to={`/${designType}`}>Back</Link>
            </div>
        </>
    )
}

export default PosterDesignReview;