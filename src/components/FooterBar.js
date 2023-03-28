import React from 'react'
import { Card } from 'react-bootstrap';
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import '../assets/css/styleFooter.css'

const FooterBar = () => {
    return (
        <Card className="footbar text-center absolute-bottom bg-dark">
            <Card.Body>
                <ul>
                    <li style={{
                        display: 'inline-block', marginRight: '50px'
                    }}><a href="#" style={{
                        textDecoration: 'none', color: 'white', fontWeight: 'bold'
                    }}><BsInstagram/> @mtsmuhammadiyahbayongbong</a>
                    </li>

                    <li style={{
                        display: 'inline-block', marginRight: '50px'
                    }}><a href="#" style={{
                        textDecoration: 'none', color: 'white', fontWeight: 'bold'
                    }}><BsFacebook/> MTs muhammadiyah bayongbong</a>
                    </li>

                    <li style={{
                        display: 'inline-block', marginRight: '50px'
                    }}><a href="#" style={{
                        textDecoration: 'none', color: 'white', fontWeight: 'bold'
                    }}><MdOutlineMail/> mtsmuhammadiyahbayongbong@gmail.com</a>
                    </li>

                    <li style={{
                        display: 'inline-block', marginRight: '50px'
                    }}><a href="#" style={{
                        textDecoration: 'none', color: 'white', fontWeight: 'bold'
                    }}><BsWhatsapp/> 089683080396</a>
                    </li>
                </ul>
            </Card.Body>
            <Card.Footer className="text-muted">@COPYRIGHT MTS MUHAMMADIYAH BAYONGBONG 2023</Card.Footer>
        </Card>
    )
}

export default FooterBar