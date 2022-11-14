import React from 'react'
import Footer from '../../Footer.jsx'
import Navbar from '../../Navbar.jsx'
import './Home.css'

export default function Home() {
    const user = {
        login: false,
        // login: true,
        id: 'soohyun',
        email: 'sasha1107@naver.com',
        img : 'https://i.pinimg.com/564x/39/e6/60/39e66091250c901c35c090355250a724.jpg'
    }

    return (
    <section className='home'>
        <Navbar/>
        <div className='loadingLogo'></div>
        <h1 className='title'>마음반짝이</h1>
        {
            user.login ?
            <p>{user.id}님 안녕하세요</p> : 
            <button type='button' className='btn-login'>LOGIN</button>
        }
        <Footer/>
    </section>
    )
}
