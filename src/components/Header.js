import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import favicon from '../images/favicon.png'
import { useDispatch, useSelector } from "react-redux";
import { logIn } from '../store/accountsSlice';

function Header() {

    const [avatarUrl, setAvatarUrl] = useState('/')

    const { Header } = Layout;

    const logged = useSelector(state => state.accounts.logged);
    const accounts = useSelector(state => state.accounts.accounts);

    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logIn( false ))
    }

    useEffect(() =>{
        const username = localStorage.getItem('username')
        setAvatarUrl(
            logged ? accounts[username].image : '/'
        )
    }, [logged])


    return (
        <Header >
            <div>
                <img src={favicon} alt="favicon" className="logo" />
            </div>
            <div className='userInfoContainer'>
                <img src={avatarUrl} alt='avatar' className='avatar' />
                <button className='logOut-button' onClick={logOut}>Log Out</button>
            </div>
        </Header>

    )
}

export default Header