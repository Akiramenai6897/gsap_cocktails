import React from 'react';
import {useGSAP} from "@gsap/react";
import {SplitText} from 'gsap/SplitText'; // Changed to named import
import gsap from "gsap";
import {useMediaQuery} from "react-responsive";


const Hero = () => {

    const videoRef = React.useRef(null);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useGSAP(()=>{

        document.fonts.ready.then(() => {
            const heroSplit = new SplitText('.title', {type: 'chars, words'});
            const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

            heroSplit.chars.forEach((char) => {char.classList.add('text-gradient')})

            gsap.from(heroSplit.chars, {
                duration: 1.5,
                yPercent: 100,
                ease: 'expo.out',
                stagger: 0.1
            })

            gsap.from(paragraphSplit.lines, {
                duration: 1.5,
                yPercent: 100,
                ease: 'expo.out',
                stagger: 0.1,
                opacity: 0,
                delay: 1.25
            })
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)


        videoRef.current.onloadedmetadata = () => {
            gsap.to(videoRef.current, {
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: isMobile ? 'top 50%' : 'center 60%',
                    end: isMobile ? '120% top' : 'bottom top',
                    scrub: true,
                    pin: true,
                },
                currentTime: videoRef.current.duration
            })
        }

    }, [])


    return (
        <>
            <section id={'hero'} className={'noisy'}>
                <h1 className={'title'}>MOJITO</h1>

                <img
                    src={'/images/hero-left-leaf.png'}
                    alt={'left-leaf'}
                    className={'left-leaf'}
                />

                <img
                    src={'/images/hero-right-leaf.png'}
                    alt={'right-leaf'}
                    className={'right-leaf'}
                />

                <div className={'body'}>
                    <div className={'content'}>
                        <div className={'space-y-5 hidden md:block'}>
                            <p className={'subtitle'}>Cool. Crisp. Classic.</p>
                            <p className={'subtitle'}>Sip the spirit <br/> of Summer</p>
                        </div>

                        <div className={'view-cocktails'}>
                            <p className={'subtitle'}>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                            <a href={'#cocktails'}>View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className={'video inset-0'}>
                <video
                    ref={videoRef}
                    src={'/videos/output.mp4'}
                    muted
                    playsInline
                    preload={"auto"}
                />
            </div>
        </>
    );
};

export default Hero;
