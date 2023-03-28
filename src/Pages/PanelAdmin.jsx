import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FooterBar from '../components/FooterBar'
import NavigationBar from '../components/NavigationBar'

const PanelAdmin = (props) => {
    const [hero1Baru, setHero1Baru] = useState(null);

    const handleSubmitHero1 = (e) => {
        e.preventDefault();
        props.onGantiHero1(hero1Baru);
    };

    const handleUbahHero1 = (e) => {
        setHero1Baru(URL.createObjectURL(e.target.files[0]));
    };


    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmitHero1}>
                            <h3>1. Jumbotron</h3>
                            <h4>Slide pertama</h4>
                            <input type="file" onChange={handleUbahHero1} />
                            <Button type='submit' >Ganti gambar</Button>
                        </Form>


                    </Col>
                </Row>
            </Container>
            <FooterBar />
        </>
    )
}

export default PanelAdmin