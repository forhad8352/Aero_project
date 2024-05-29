import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import bannerimg from "../../assets/bannerimg.png"
import { FaBell } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
        <Container>
             <Row>
                <Col lg={6}>
                        <div className="banner_text">
                                <div className="bann_inner">
                                <a href="#">Startup Business </a>
                                 <div className="bell">
                                 <FaBell /> 
                                 </div>                                                       
                                </div>
                                <div className="banner_inner_text">
                                <h2>Empowering startups to fuel their business growth</h2>
                                <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,velit nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                                </div>
                        </div>
                </Col>
                <Col lg={6}>
                        <div className="banner_img">
                                <div className="ban_im">
                                <img src={bannerimg} alt="" />
                                </div>
                        </div>
                </Col>
             </Row>
        </Container>
    </div>
  )
}

export default Banner