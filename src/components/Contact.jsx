import React from 'react';
import {openingHours, socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import SplitText from 'gsap/SplitText';
import gsap from "gsap";

const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create(
            '#contact h2',
            {type: 'words'}
        )

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 50%'
            },
            ease: 'power1.inOut'
        })

        const lTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 25%'
            }
        })

        timeline
            .from(
                titleSplit.words,
                {
                    opacity: 0,
                    yPercent: 100,
                    stagger: 0.02
                })
            .from(
                '#contact h3, #contact p',
                {
                    opacity: 0,
                    yPercent: 100,
                    stagger: 0.02
                }
            )

        lTimeline
            .fromTo(
                '#f-right-leaf',
                {
                    opacity: 0,
                    y: -100
                },
                {
                    y: -20,
                    opacity: 1
                },
                0
            )
            .fromTo(
                '#f-left-leaf',
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    y: 0,
                    opacity: 1
                },
                0
            )
    })

    return (
        <footer id={'contact'}>
            <img
                src={'/images/footer-left-leaf.png'}
                alt={'left-leaf'}
                id={'f-left-leaf'}
            />
            <img
                src={'/images/footer-right-leaf.png'}
                alt={'right-leaf'}
                id={'f-right-leaf'}
            />

            <div className={'content'}>
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd. #404, los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@hsmcocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} - {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className={'flex-center gap-5'}>
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target={'_blank'}
                                rel={'noopenner noreferrer'}
                                aria-label={social.name}
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
