import React from 'react';
import HomeAllBooks from '../HomeAllBooks/HomeAllBooks';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategorySlider from '../HomeCategorySlider/HomeCategorySlider';
import HomeFbGroup from '../HomeFbGroup/HomeFbGroup';
import HomeOurDetails from '../HomeOurDetails/HomeOurDetails';
import HomeRecentPublished from '../HomeRecentPublished/HomeRecentPublished';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeRecentPublished></HomeRecentPublished>
            <HomeOurDetails></HomeOurDetails>
            <HomeAllBooks></HomeAllBooks>
            <HomeCategorySlider></HomeCategorySlider>
            <HomeFbGroup></HomeFbGroup>
        </div>
    );
};

export default Home;