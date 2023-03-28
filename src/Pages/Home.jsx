import React from 'react'
import FooterBar from '../components/FooterBar'
import MainContent from '../components/MainContent'
import NavigationBar from '../components/NavigationBar'

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <MainContent />
            <FooterBar />
        </div>
    )
}

export default Home