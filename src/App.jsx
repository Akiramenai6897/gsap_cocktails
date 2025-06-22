import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    );
};

export default App;
