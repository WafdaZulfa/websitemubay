import React from 'react'
import Hero from './Hero'
import {Container, Row, Col } from "react-bootstrap";
import News from './News';
import heroImage from '../assets/images/full/bg.jpg'

const MainContent = () => {
    const hero1Awal = {heroImage};
    return (
        <div>
            <Hero hero1={hero1Awal} />
            {/* Box Word */}
            <Container fluid className='boxWord Container text-center mx-auto mt-5 rounded shadow-sm' style={{backgroundColor: 'lightskyblue', width: '900px', height: '80px', margin: 'auto'}}>
                <Row>
                    <Col className='mt-3'><h3>Menciptakan Pelajar yang Kreatif dan Inovatif</h3></Col>
                </Row>
            </Container>
            <News />




        </div>
    )
}

export default MainContent