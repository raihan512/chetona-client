import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeRecentPublished from '../HomeRecentPublished/HomeRecentPublished';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeRecentPublished></HomeRecentPublished>
        </div>
    );
};

export default Home;