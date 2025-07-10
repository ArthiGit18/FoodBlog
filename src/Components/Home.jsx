import React from 'react'
import NavBar from '../Pages/NavBar'
import Banner from '../Pages/Banner'
import About from '../Pages/About'
import TopRecipes from '../Pages/TopRecipes'
import CategoryScroll from '../Pages/CategoryScroll'
import LatestRecipes from '../Pages/LatestRecipe'
import NavMenu from '../Pages/NavMenu'

const Home = () => {
    return (
        <>
            <NavBar />
            <NavMenu />
            <Banner />
            <About />
            <TopRecipes />
            <CategoryScroll />
            <LatestRecipes />
        </>
    )
}

export default Home