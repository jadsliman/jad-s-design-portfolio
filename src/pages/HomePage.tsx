import { useEffect } from "react";
import Header from "../components/shared/Header";
import Introduction from "../components/HomePage/Introduction";
import DesignReview from "../components/HomePage/DesignReview";
import Footer from "../components/shared/Footer";
import { posters, logos, socialMedia, others } from "../data/data";
import './HomePage.css'

function HomePage() {
    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Introduction />
            <DesignReview designs={logos} title="Logos" description="A collection of logo designs for various clients." />
            <DesignReview designs={socialMedia} title="Social Media" description="Creative social media graphics for all the platforms." />
            <DesignReview designs={posters} title="Posters" description="Eye-catching poster designs for movies and promotions." />
            <DesignReview designs={others} title="Others" description="Miscellaneous design projects that don't fit into the other categories." />
            <Footer />
        </>
    )
}

export default HomePage;