import React, {useState} from 'react'
import {Carousel, Form} from 'react-bootstrap'
import heroImage2 from '../assets/images/full/bg6.png'
import heroImage3 from '../assets/images/full/bg5.jpeg'

const Hero = (props) => {
    const [hero1, setHero1] = useState(props.gambar);
    const handleGantiHero1 = (hero1Baru) =>{
        setHero1(hero1Baru);
    }
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero1}
                    alt="hero1"
                />
                <Carousel.Caption>
                    <h3>MTs Muhammadiyah Bayongbong</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eligendi veniam recusandae dolorem dolore architecto alias iste qui molestiae magnam praesentium quidem, quasi dicta nisi, nesciunt itaque quas, suscipit facere?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-80"
                    src={heroImage2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Santriwan dan Santriwati</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-80"
                    src={heroImage3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Ba'iat Rutin</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero