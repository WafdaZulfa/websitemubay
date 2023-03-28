import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col } from "react-bootstrap"
import { BsFillBuildingFill, BsFillTelephoneFill, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import FooterBar from '../components/FooterBar'

const Kontak = () => {
  return (
    <div>
        <NavigationBar/>
        <Container style={{ marginTop: '110px'}}>
          <Row>
            <Col md={2}></Col>
            <Col md={5}>
            <h3>Alamat Sekolah</h3>
            <hr style={{width: '200px'}} />
            <p><BsFillBuildingFill/> Jl Terusan Pembangunan Bayongbong Kecamatan Bayongbong Kab Garut</p>
            <a href="https://www.youtube.com/" style={{textDecoration: 'none', color: 'black'}}><p><MdEmail/> mubayinfo@gmail.com</p></a>
            <p><BsFillTelephoneFill/> (0260)-090909</p>
            </Col>

            <Col md={5}>
            <h3>Sosial Media</h3>
            <hr  style={{width: '200px'}}/>
            <a href="https://id-id.facebook.com/" style={{textDecoration: 'none', color: 'black'}}><p><BsFacebook/> Mubay bay</p></a>
           <a href="https://www.instagram.com/?hl=id" style={{textDecoration: 'none', color: 'black'}}> <p><BsInstagram/> Mubay_real</p></a>
           <a href="" style={{textDecoration: 'none', color: 'black'}}><p><BsWhatsapp/> 089675435567</p></a> 
            </Col>
          </Row>
        </Container>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <FooterBar/>
    </div>
  )
}

export default Kontak