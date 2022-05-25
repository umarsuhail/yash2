import React from "react";
import BlackSection from "../components/BlackSection";
import BottomSection from "../components/BottomSection";
import Filter from "../components/Filter";
import HomePageHeader from "../components/HomePageHeader";
import HomePageHeroSection from "../components/HomePageHeroSection";
import RoadSection from "../components/RoadSection";
import Tabs from "../components/Tabs";
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
            <div className="grid grid-cols-2">
                <div className="container mx-auto px-4">
                    <HomePageHeader
                        heroText="No Hussle."
                        heroText2="All Electric."
                        contentBold="Lease online, Get it delivered, Love it."
                        content="At zeVie, we cut through the noise of tech and hype and give you the real facts about electric vehicles"
                        buttonText1="Browse cars"
                        buttonText2="Browse vans"></HomePageHeader>
                </div>
                <div>
                    <HomePageHeroSection />
                </div>

            </div>
            <div className="container mx-auto px-4">
                <Tabs Tab1="Cars" Tab2="Vans" />
                <Filter />
            </div>
            <BlackSection />
            <RoadSection />
            <BottomSection />
        </Layout>
    );
};
export default Home;
