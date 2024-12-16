import React from 'react'
import Top from '../Top/Top'
import SaidBar from '../SaidBar/SaidBar'
import Main from '../Main/Main'
import TwentyTwenty from '../TwentyTwenty/TwentyTwenty'
import Gallery from '../Gallery/Gallery'
import Plan from '../Plan/Plan'
import Choose from '../Choose/Choose'
import Frequently from '../Frequently/Frequently'
import About from '../About/About'
import Features from '../Features/Features'
import CrimeScene from '../CrimeScene/CrimeScene'
import Brochure from '../Brochure/Brochure'
import Other from '../Other/Other'

export default function Home() {
    return (
        <>
            <Top />
            <SaidBar />
            <Main />
            <About />
            <TwentyTwenty />
            <Brochure />
            <Gallery />
            <Features />
            <CrimeScene />
            <Plan />
            <Choose />
            <Other />
            <Frequently />
        </>
    )
}
