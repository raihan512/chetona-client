import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategorySlider from '../HomeCategorySlider/HomeCategorySlider';
import HomeRecentPublished from '../HomeRecentPublished/HomeRecentPublished';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeRecentPublished></HomeRecentPublished>
            <HomeCategorySlider></HomeCategorySlider>
        </div>
    );
};

export default Home;