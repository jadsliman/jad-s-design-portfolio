import { useParams } from "react-router";
import { useEffect } from "react";
import Header from "../components/shared/Header";
import TitleAndDescription from "../components/shared/TitleAndDescription";
import CardsGrid from "../components/AllDesignsPage/CardsGrid";
import Footer from "../components/shared/Footer";
import './AllDesignsPage.css'

function AllDesignsPage() {
    const { designType } = useParams<{ designType: string }>();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [designType]);

    return (
        <>
            <Header />
            <TitleAndDescription
                title={designType}
                description={`Explore my collection of ${designType!.replace(/\s+/g, ' ')} designs.`}
                style={{ marginTop: '125px' }}
            />
            <CardsGrid />
            <Footer />
        </>
    )
}

export default AllDesignsPage;