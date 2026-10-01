import { useParams } from "react-router";
import Header from "../components/shared/Header";
import PosterDesignReview from "../components/SingleDesignPage/PosterDesignReview";
import LogoDesignReview from "../components/SingleDesignPage/LogoDesignReview";
import Footer from "../components/shared/Footer";
import './SingleDesignPage.css'
import { useEffect } from "react";

function SingleDesignPage() {
    const { designType } = useParams<{ designType: string }>();
    useEffect(() => {
        scrollTo(0, 0);
    }, [designType]);

    return (
        <>
            <Header />
            {designType === 'logos' ? <LogoDesignReview /> : designType === 'others' ? null : <PosterDesignReview />}
            <Footer />
        </>
    )
}

export default SingleDesignPage;