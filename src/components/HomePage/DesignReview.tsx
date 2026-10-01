import DesignCard from "../shared/DesignCard";
import TitleAndDescription from "../shared/TitleAndDescription";
import { Link, useNavigate } from "react-router";
import './DesignReview.css'

type DesignReviewProps = {
    designs: {
        id: number;
        title: string;
        shortDescription?: string;
        fullDescription?: string;
        date?: string;
        image: string;
        mockup1?: string;
        secLogo?: string;
        pattern?: string;
        mockup2OrBoard?: string;
    }[],
    title: string,
    description: string
}

function DesignReview({ designs, title, description }: DesignReviewProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className="review-container">
                <TitleAndDescription title={title} description={description} />
                <div className="cards-container">
                    {
                        designs.map((design) => {
                            if (design.id > 2) return null;
                            return (
                                <DesignCard
                                    key={design.id}
                                    image={design.image}
                                    description={design.shortDescription ?? ''}
                                    onClick={() => {
                                        if (title.toLowerCase() === 'others') {
                                            return;
                                        }
                                        navigate(`/${title.toLowerCase().replace(/\s+/g, '-')}/${design.title?.toLowerCase().replace(/\s+/g, '-')}`);
                                    }}
                                    style={{ cursor: title.toLowerCase() === 'others' ? 'default' : 'pointer' }}
                                />
                            )
                        })
                    }
                </div>
                <div className="see-more-container">
                    <Link className="see-more-button" to={`/${title.toLowerCase().replace(/\s+/g, '-')}`}>See More</Link>
                </div>
            </div>
        </>
    )
}

export default DesignReview;