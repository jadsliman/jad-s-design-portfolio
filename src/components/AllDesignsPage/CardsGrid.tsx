import { useParams, useNavigate } from "react-router";
import DesignCard from "../shared/DesignCard";
import { posters, logos, socialMedia, others } from "../../data/data";
import './CardsGrid.css'

function CardsGrid() {
    const { designType } = useParams<{ designType: string }>();
    const designs = designType === 'logos' ? logos : designType === 'social-media' ? socialMedia : designType === 'posters' ? posters : designType === 'others' ? others : null;
    const navigate = useNavigate();

    return (
        <>
            <div className="cards-grid">
                {
                    designs!.map((design) => {
                        return (
                            <DesignCard
                                key={design.id}
                                image={design.image}
                                description={design.shortDescription}
                                onClick={() => {
                                    if (designType === 'others') {
                                        return;
                                    }
                                    navigate(`/${designType}/${design.title?.toLowerCase().replace(/\s+/g, '-')}`);
                                }}
                                style={{ cursor: designType === 'others' ? 'default' : 'pointer' }}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CardsGrid;