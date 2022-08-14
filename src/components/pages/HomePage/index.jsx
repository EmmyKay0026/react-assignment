import React from "react";
import { HeroSection, Gallery } from '../../organism'
import { BottomSection } from '../../molecules'


export const HomePage= ()=>{
    return (
        <>
            <HeroSection/>
            <Gallery/>
            <BottomSection/>
        </>
    )
}