import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Space, Layout, Col, Row } from 'antd';
import home from "../images/home.png"
import RoomCarousel from "../components/RoomCarousel"
import check from '../images/check.png'


function SingleRoomPage() {

    const logged = useSelector(state => state.accounts.logged);

    const rooms = useSelector(state => state.rooms.rooms)

    const location = useLocation()
    const roomId = location.pathname.replace('/rooms/', '')

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            {logged === false && <Navigate to="/login" />}
            <Layout className="layout">

                <Header />

                <Space style={{
                    margin: 20,
                    display: 'flex'
                }}>
                    <Button type="link" className="home-button" onClick={goBack}>
                        <img src={home} alt="home" />
                        <h3>Back home</h3>
                    </Button>
                </Space>

                <Row gutter={[25, 8]} style={{
                    marginLeft: 37.5,
                    marginRight: 37.5,
                    height: '500px',
                }}>

                    <Col span={12}>
                        <RoomCarousel />
                    </Col>

                    <Col span={5} >
                        <h1 className="roomData-h1">Room {rooms[roomId].number}</h1>
                        <div className="roomData-h3">
                            <h3>Type :</h3><p>{rooms[roomId].type.charAt(0).toUpperCase()}{rooms[roomId].type.slice(1)}</p>
                        </div>
                        <div className="roomData-h3">
                            <h3>Occupancy :</h3><p>{rooms[roomId].occupancy}</p>
                        </div>
                        <div className="roomData-h3">
                            <h3>Price :</h3><p>{rooms[roomId].price}</p>
                        </div>
                        <div className="roomData-h3">
                            <h3>Guest :</h3><p>{rooms[roomId].guest}</p>
                        </div>
                    </Col>

                    <Col span={7}>

                        <Space className="checkIn-checkOut">
                            <Button type="primary" className="check-button" disabled>Check In</Button>
                            <Button type="primary" className="check-button" >
                                Check Out
                            </Button>
                        </Space>

                        <div className="roomFeatures">
                            <h3>Features :</h3>
                            <div className="features">
                                {rooms[roomId].features.map(feature =>
                                    <div key={feature} className="feature-item">
                                        <p><img src={check} /> {feature}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </Col>
                </Row>

                    <div className="roomData-h3 description">
                        <h3>Description:</h3><p>{rooms[roomId].description}</p>
                    </div>


            </Layout>

        </>
    )
}

export default SingleRoomPage