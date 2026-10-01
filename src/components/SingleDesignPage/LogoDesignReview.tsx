import TitleAndDescription from "../shared/TitleAndDescription";
import { Link, useParams } from "react-router";
import { logos } from "../../data/data";
import './LogoDesignReview.css'

function LogoDesignReview() {
    const { designType, designName } = useParams<{ designType: string; designName: string }>();
    const logoDesign = logos!.find((design) => design.title?.toLowerCase().replace(/\s+/g, '-') === designName);

    return (
        <>
            <TitleAndDescription
                title={logoDesign?.title ?? ''}
                description={logoDesign?.shortDescription ?? ''}
                style={{ marginTop: '125px' }}
            />
            <div className='logo-review-container'>
                <img src={`/${logoDesign?.image}`} className='logo-img' />
                <p className='full-logo-description'>{logoDesign?.fullDescription ?? ''}</p>
                <p className='logo-date'>Design Date: {logoDesign?.date ?? ''}</p>
                <div className="imgs-container">
                    <img className="img first-img" src={`/${logoDesign!.mockup1}`} />
                    <img className="img second-img" src={`/${logoDesign!.secLogo}`} />
                    <img className="img third-img" src={`/${logoDesign!.pattern}`} />
                    <img className="img fourt-img" src={`/${logoDesign!.mockup2OrBoard}`} />
                </div>
                <Link className='back-button' to={`/${designType}`}>Back</Link>
            </div>
        </>
    )
}

export default LogoDesignReview;