import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import news1 from '../assets/images/full/1.jpg'
import news2 from '../assets/images/full/2.jpg'
import news3 from '../assets/images/full/3.jpeg'
import { BiNews } from "react-icons/bi"

const News = () => {
    return (
        <Container>
            <Row className='mt-5 ms-0' style={{
                marginRight: '300px'
            }}>
                <Col sm={8}>
                    <h5 style={{
                        textAlign: 'center'
                    }}><BiNews /> Update News</h5>
                    <hr className='mt-3' style={{
                        width: '800px', marginLeft: '180px'
                    }} />
                </Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                {/* Berita Utama Start */}
                <Col sm={5}>
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem', border: 'none', textAlign: 'left' }}>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <p style={{ fontSize: '12px', color: 'lightskyblue', fontWeight: 'bold' }}>News</p>
                                <h5>Setelah 2 Minggu libur, kini saatnya masuk sekolah kembali</h5>
                                <p style={{ fontSize: '12px', color: 'darkgray' }}>Media MTs Muhammadiyah Bayongbong</p>

                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                {/* Berita utama End */}

                {/* SIde berita start */}
                <Col sm={4}>
                    <div className="sideNews mb-5">
                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={news2} alt="berita1" style={{
                                width: '8rem', height: '5rem', float: 'left', marginRight: '5px'
                            }} />
                            <p style={{ fontSize: '10px', color: 'lightskyblue', fontWeight: 'bold', textAlign: 'left', marginBottom: '1px' }}>News</p>
                            <p style={{ fontSize: '13px', textAlign: 'left', marginBottom: '5px' }}>Libur telah tiba libur telah tiba hiore hore kita libur</p>
                            <p style={{ fontSize: '10px', color: 'darkgray', textAlign: 'left' }}>Media MTs Muhammadiyah Bayongbong</p>
                        </a>
                    </div>

                    <div className="sideNews mb-5">
                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={news3} alt="berita1" style={{
                                width: '8rem', height: '5rem', float: 'left', marginRight: '5px'
                            }} />
                            <p style={{ fontSize: '10px', color: 'lightskyblue', fontWeight: 'bold', textAlign: 'left', marginBottom: '1px' }}>News</p>
                            <p style={{ fontSize: '13px', textAlign: 'left', marginBottom: '5px' }}>Libur telah tiba libur telah tiba hiore hore kita libur</p>
                            <p style={{ fontSize: '10px', color: 'darkgray', textAlign: 'left' }}>Media MTs Muhammadiyah Bayongbong</p>
                        </a>
                    </div>

                    <div className="sideNews">
                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={news1} alt="berita1" style={{
                                width: '8rem', height: '5rem', float: 'left', marginRight: '5px'
                            }} />
                            <p style={{ fontSize: '10px', color: 'lightskyblue', fontWeight: 'bold', textAlign: 'left', marginBottom: '1px' }}>News</p>
                            <p style={{ fontSize: '13px', textAlign: 'left', marginBottom: '5px' }}>Libur telah tiba libur telah tiba hiore hore kita libur</p>
                            <p style={{ fontSize: '10px', color: 'darkgray', textAlign: 'left' }}>Media MTs Muhammadiyah Bayongbong</p>
                        </a>
                    </div>
                </Col>
                {/* side berita end */}
            </Row>
        </Container>
    )
}

export default News