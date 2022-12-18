import React from 'react';
import { Layout } from 'antd';
import favicon from '../images/favicon.png'


const MainLayout = () => {

    const { Header, Content } = Layout;

    return (
        <Layout className="layout">
            <Header >
                <div>
                <img src={favicon} alt="favicon" className="logo" />
                </div>
                <div>
                    <img src='/' alt='avatar' />
                    <button className='logOut-button'>Log Out</button>
                </div>
            </Header>
            <Content>Content</Content>
        </Layout>
    )
};

export default MainLayout;
