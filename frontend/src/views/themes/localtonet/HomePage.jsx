import React from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import DarkModeSwitcher from './components/DarkModeSwitcher'

import SectionOne from './components/homepage/SectionOne'
import SectionTwo from './components/homepage/SectionTwo'
import SectionThree from './components/homepage/SectionThree'
import SectionFour from './components/homepage/SectionFour'
import SectionFive from './components/homepage/SectionFive'
import SectionSix from './components/homepage/SectionSix'

import "./assets/js/tiny-slider";
import "./assets/js/feather.min";
import "./assets/js/plugins.init";
import "./assets/js/app";
export default class HomePage extends React.Component{

    render(){
        return(
            <>
            <Nav/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
            <DarkModeSwitcher/>
            </>
        )
    }
}