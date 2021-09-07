import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewSletter from '../components/NewSletter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories/>
            <Products />
            <NewSletter />
            <Footer />
        </div>
    )
}

export default Home
