import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-container" id='footer-container'>
                <div className="contact-info">
                    Click
                    <a href="mailto: jadsliman72@gmail.com" className='contact-link' target="_blank"> here </a>
                    to send me an email, or
                    <a href="https://wa.me/qr/SZKYDCV57BVHP1" className='contact-link' target="_blank"> here </a>
                    to contact me via WhatsApp.
                </div>
            </div>
        </>
    )
}

export default Footer;