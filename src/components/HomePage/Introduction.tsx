import pfp from '../../assets/Personal Pic.jpg'
import './Introduction.css'

function Introduction() {
    return (
        <>
            <div className='introduction-container'>
                <img src={pfp} className='introduction-img' />
                <p className='introduction-text'>
                    Welcome to my portfolio!
                    <br />
                    <br />
                    I'm Jad Allah Solaiman
                    <br />
                    Self-learner and creativity lover, I can provide so many technical services from graphic designing to games developing, I
                    have flexibility and ability to work in different situations and roles from my experience.
                    <br />
                    <br />
                    I design many things as a freelancer, but my specialization is designing logos and social media posts, my job is to turn
                    the client's idea into reality with amazing visuals. I work with adobe package like Photoshop, Illustrator and After
                    effects.
                    <br />
                    <br />
                    Here, you will find my best works and projects, I hope you enjoy it.
                    <br />
                    <br />
                    if you want to work with me, please contact me through the contact info below.
                </p>
            </div>
        </>
    )
}

export default Introduction;