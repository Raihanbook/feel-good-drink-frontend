import { useEffect } from "react";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutUs = () => {

    useEffect(() => {

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);
    const variants = {
        initial: {
            opacity: 0,
            y: 40,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="container-fluid">
            <div className="row mt-4 align-items-center">
                <div className="col-8 text-left">
                    <h1 className="pageTitle">About Us</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under page title */}
                </div>
            </div>
            <InView triggerOnce threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate={inView ? 'show' : undefined}
                        transition={{ duration: 1 }}
                        ref={ref}
                        className="row m-auto align-items-center text-left"
                    >
                        {/* Entire Page's Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                        <div className="about-people-planet">
                            <h2 className="text-center">3% for People & Planet</h2> {/* Page section title */}
                            <div className="row">
                                <img src="./man_behind_brand.png" className="col-lg-4 col-md-5 col-sm-6 about-intro-img"></img> { /* Feel Good Drinks (@feelgooddrinks). 2021. "This time of the year feels soooo good, doesn't it?" Instagram Photo, May 28, 2021. https://www.instagram.com/p/CPawuHAriI5/. */}
                                <div className="col-lg-8 col-md-7 col-sm-6">
                                    <p>At the beating heart of Feel Good is a mission to make this world a better place for everyone.</p>
                                    <p>We wanted to create a brand that could give back to people AND the planet. Giving people a better choice about how they consume. That's why we created the 3% for People & Planet Fund. We donate 3% of our sales to charities that support personal and planetary wellbeing. Now that feels good, doesn't it?</p>
                                    <h5>#FeelGoodMoments</h5>
                                    <p>We facilitate #FeelGoodMoments in partnerships with charities that align with our values of fostering communities, the environment and personal wellbering. The good news is we can help more people as Feel Good grows. Every can sold makes a difference.</p>
                                </div>
                            </div>
                            <p>Feel Good employees get involved too. Every year they each work 4 days at the charities we have partnered with on #DoGoodMoments.</p>
                            <br></br>
                            <p><strong>So far this year the 3% People & Planet fund has donated over £10k to charity and we are excited to introduce you to the people we have been working with...</strong></p>
                        </div>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate={inView ? 'show' : undefined}
                        transition={{ duration: 1 }}
                        ref={ref}
                        className="about-sea"
                    >
                        <div id="aboutSea-Title" className="row justify-content-center" style={{
                            backgroundImage: 'url("./sea_swish.png")',
                        }}>
                            <h2 className="text-center">Sea</h2> {/* Sub section title */}
                        </div>
                        <div className="article">
                            <div className="row">
                                <div className="col-xl-5 gx-5 col-md-5 col-sm-6 ">
                                    <div className="vidColumn">
                                        <img src="./seagrass_logo.png" alt="Project Seagrass illustration" /> {/* Feel Good Drinks. n.d. "[Project Seagrass Logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        <video autoPlay loop muted playsInline className="col">
                                            <source src="./sea_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Seahorse Illustration]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </video>
                                    </div>
                                </div>
                                <div className="col-xl-7 gx-7 col-md-7 col-sm-6">
                                    <p><strong>Project Seagrass</strong> is a brilliant conservation initiative to restore lost ecosystems that absorb high levels of carbon. They are the forefront of societal change to enable the recognition, recovery and resilience of seagrass ecosystems globally - a crucial planetary life support. Marine conservation is a subject very close to Feel Good leader Ed Woolner's heart and one of his main objectives is to offset carbon via ocean and sea protection to restore ocean biodiversity and promote blue health. So this is a very special partnership.</p>
                                    <p>Feel Good are joining forces with Project Seagrass to assist in their ocean marine restoration including programmes to rewild seagrass, invite them to speak directly to our community and financially contribute to a short film they have commission for the G7.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate={inView ? 'show' : undefined}
                        transition={{ duration: 1 }}
                        ref={ref}
                        className="about-earth"
                    >
                        <div id="aboutEarth-Title" className="row justify-content-center" style={{
                            backgroundImage: 'url("./earth_swish.png")',
                        }}>
                            <h2 className="text-center">Earth</h2> {/* sub section title*/}
                        </div>
                        <div className="article">
                            <div className="row">
                                <div className="col-xl-7 col-md-7 col-sm-6">
                                    <p><strong>Planet Mark</strong> is a sustainability certification for every type of organisation which recognises continuous improvement, encourages action and builds an empoweres community of like-minded individuals making a world of difference. At Feel Good we are delighted to be part of this movement.</p>
                                    <p>We have already committed to a net zero planet through our certification, will continue to build awareness of the challenges we face with climate change and will collaborate on events around G7 and COP26.</p>
                                </div>
                                <div className="col-xl-5 gx-5 col-md-5 col-sm-6">
                                    <div className="vidColumn">
                                        <img className="planet-logo" src="./planet_mark_logo_min.png" alt="Planet mark logo" /> {/* Feel Good Drinks. n.d. "[Planetmark Logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                                        <video autoPlay loop muted playsInline className="col">
                                            <source src="./earth_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Earth Illustration]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate={inView ? 'show' : undefined}
                        transition={{ duration: 1 }}
                        ref={ref}
                        className="about-communities"
                    >
                        <div id="aboutComms-Title" className="row justify-content-center" style={{
                            backgroundImage: 'url("./communities_swish.png")',
                        }}>
                            <h2 className="text-center">Communities</h2> {/* sub section title */}
                        </div>
                        <div className="article">
                            <div className="row">
                                <div className="col-xl-5 gx-5 col-md-5 col-sm-6 ">
                                    <div className="vidColumn">
                                        <img src="./wave_logo.png" alt="Project WAVE logo" className="wave-logo" /> {/* Feel Good Drinks. n.d. "[Wave logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        <video autoPlay loop muted playsInline className="col">
                                            <source src="./communities_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Surfing Illustration]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </video>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-sm-6">
                                    <p><strong>The Wave</strong> is the first inland-surfing destination of its kind, where people of all ages, backgrounds and abilities can experience the joy of surfing and its physical and mental health benefites.
                                        Our Feel Good leader Ed, who has been surfing since he was 8 years old, is passionate about the power of blue health. He believes everyone should have access to this type of activity. It's not just about surfing. It's about getting back to nature, improving health and well-being, connecting with other people and having a lot of fun in the process!</p>
                                    <p>Feel Good will be working with The Wave on their forthcoming social impact programme to help those who would not have the opportunity to experience surfing, will spread the word about the benefits of blue health and run a series of events and competitions.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>
            <div className="man-behind-brand" style={{ borderTop: '2px solid #222222' }}> {/* Line to seperate page sections */}
                
                <InView triggerOnce threshold={0.25}>
                    {({ ref, inView }) => (
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate={inView ? 'show' : undefined}
                            transition={{ duration: 1 }}
                            ref={ref}
                        >
                            <h2 className="text-center">The Man Behind The Brand</h2> {/* Page section title */}
                            <div>
                                <p className="text-center"><strong>We all have feel good moments. Mine is being in the sea. Whether it's swimming, surfing or sailing, either on my own or with my family and friends, it's exactly where I want to be.</strong></p>
                                <div className="row article">
                                    <img src="./ed_owner.png" alt="Man behind the brand" className="col-lg-4 col-md-5 col-sm-6" /> {/* Feel Good Drinks (@feelgooddrinks). 2021. "HAPPY SUNDAY." Instagram Photo, June 27, 2021. https://www.instagram.com/p/CQnhwFwLwWO/. */}
                                    <div className="col-lg-8 col-md-7 col-sm-6 align-self-center">
                                        <p>I was lucky that I knew this from an early age having moved to the Gower when I was 9. Living by the coast became an essential part of my wellbeing and so, at the age of 21, I chose to put the sea permanently at the centre of my world when I moved to West Dorset. It was one of the best decisions I ever made and has kept a balance throughout my life.</p>
                                        <p>Getting in the water allows me to challenge myself in a variety of conditions and, by being present in the moment, it gives me space to think - often influencing some of life's big decisions. Like launching a purpossful brand, Feel Good Drinks.</p>
                                    </div>
                                </div>
                                <p className="text-center"><strong>Feel Good drinks are a range of 100% natural, great tasting, fruity sparkling waters that contain no nasty additives, added sugars or sweetners, making them a healthy choice for all.</strong></p>
                                <div className="row article">
                                    <div className="col-lg-9 col-md-8 col-sm-8 align-self-center">
                                        <p>So far so good but it's not enough to just think about what is inside the can, we must consider the can itself and the wider impact these products have on our environment. In our production of this drink we have wholeheartedly committed to becoming climate positive this year (2021) and net zero by 2023. In fact, we have already achieved the former and been awarded sustainability certification from the internationally revered Planet Mark. I am bursting with pride at the pioneering strides we are taking. And here's another reason why.</p>
                                    </div>
                                    <img src="./climate_positive.png" alt="climate positive archievement" className="col-lg-3 col-md-4 col-sm-4 col-9 about-image" /> {/* Feel Good Drinks (@feelgooddrinks). 2021. "Every one of us can make a positive difference in the fight against climate change." Instagram Photo, June 2, 2021. https://www.instagram.com/p/CPm9239L71_/.  */}
                                </div>
                                <p className="text-center"><strong>We have established The Feel Good 3% People Planet Fund. It's out own way of giving back.</strong></p>
                                <div className="row article">
                                    <video className="col-lg-4 col-md-5 col-sm-5 col-9 about-image" autoPlay loop muted playsInline>
                                        <source src="./people_planet.mp4" type="video/mp4" /> {/* Animated by Group Mint. Original: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                                    </video>
                                    <div className="col-lg-8 col-md-7 col-sm-7">
                                        <div>
                                            <p>The fund donates to, and partners with, charities that support personal and planetary wellbeing. We work with likeminded initiatives who are as committed to the natural world as we are. We all know how precarious our planet's future is, how hard it is to protect and restore it, but we can have a positive impact - as custodians of the land, parents and consumers. With each choice we can make a difference and here at Feel Good we have the opportunity to support others with those choices too. That makes me very happy.</p>
                                            <p>So what's your feel good moment? We would love to know. Come and join us on our epic journey and let's share our discoveries.</p>
                                        </div>
                                        <div>
                                            <p><strong>Ed</strong><br></br>
                                                The Man Behind The Brand.<br></br>
                                                #DoGood #BeGood #FeelGood #FeelGoodMoments
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="so-feel-good" style={{ borderTop: '2px solid #222222' }}> {/* Line to seperate page sections */}
               
                <InView triggerOnce threshold={0.25}>
                    {({ ref, inView }) => (
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate={inView ? 'show' : undefined}
                            transition={{ duration: 1 }}
                            ref={ref}
                        >
                            <h2 className="text-center">So Far So Feel Good</h2> {/* Page section title */}
                            <div className="row article">
                                <img src="./speech_bubble_slim.png" alt="speech bubble" className="col-lg-3 col-md-3 g-1 col-sm-3 col-9 about-image" /> {/* Edited by Group Mint. Original: John3. 2019. "Chat Oval Speech Bubbles Symbol Comments." Top PNG. https://toppng.com/chat-oval-speech-bubbles-symbol-comments-icon-chat-PNG-free-PNG-Images_234561.  */}
                                <div className="col-md-9 col-lg-9 col-sm-9 text-left align-self-center">
                                    <p>"Feel Good drinks have the vision and genuine commitment to becoming a regenerative business and I am really glad to see the changes that they have already started to make. It is a pleasure working with Ed and the team supporting their transformational journey."</p>
                                    <p><strong>Marina Bradford</strong><br></br>
                                        Sustainable Procurement Consultant (Bemari)</p>
                                </div>
                            </div>
                            <div className="text-left">
                                <p>At Feel Good each decision we make is a big one because, before we think about the product, we think about the planet and the people. We are at the start of our sustainability journey and are constantly looking to improve our impact as we progress.</p>
                                <p><strong>Click or hover over the images below to see more details!</strong></p>
                            </div>
                            {/* References for Infographic images can be found in the CSS file */}
                            <div className="row g-4 justify-content-center">
                                <div className="info-hover1 col-lg-4 col-md-4 col-sm-4 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have chosen to use aluminium cans because they can be recycled forever" className="placeholder"></img>
                                    <div className="info-overlay1">
                                        <div className="info-text1">We have chosen to use aluminium cans because they can be recycled forever and saved 95% of energy compared to primary production</div>
                                    </div>
                                </div>
                                <div className="info-hover2 col-lg-4 col-md-4 col-sm-4 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have been awarded Planet Mark certification" className="placeholder"></img>
                                    <div className="info-overlay2">
                                        <div className="info-text2">We have been awarded Planet Mark certification for our efforts so far</div>
                                    </div>
                                </div>
                                <div className="info-hover3 col-lg-4 col-md-4 col-sm-4 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have committed to a net zero business by 2030" className="placeholder"></img>
                                    <div className="info-overlay3">
                                        <div className="info-text3">We have committed to a net zero business by 2030</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="info-hover4 col-lg-5 col-md-5 col-sm-5 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have donated 63k cans to food banks and 7.5k cans to the NHS" className="placeholder"></img>
                                    <div className="info-overlay4">
                                        <div className="info-text4">We have donated 63k cans to food banks and 7.5k cans to the NHS</div>
                                    </div>
                                </div>
                                <div className="info-hover5 col-lg-5 col-md-5 col-sm-5 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have donated 750 rucksacks and sleeping bags to the homeless" className="placeholder"></img>
                                    <div className="info-overlay5">
                                        <div className="info-text5">We have donated 750 rucksacks and sleeping bags to the homeless</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="info-hover6 col-lg-5 col-md-5 col-sm-5 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have Offset 497 tonnes of CO2" className="placeholder"></img>
                                    <div className="info-overlay6">
                                        <div className="info-text6">We have Offset 497 tonnes of CO2, with clean water Gold Standard schemes from Planet Mark</div>
                                    </div>
                                </div>
                                <div className="info-hover7 col-lg-5 col-md-5 col-sm-5 col-10">
                                    <img src="./infographic_placeholder.png" alt="We have donated £10k to charity so far in 2021" className="placeholder"></img>
                                    <div className="info-overlay7">
                                        <div className="info-text7">We have already donated over £10k to charity so far this year (2021) through our 3% for People and Planet Fund</div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </InView>
            </div>
        </div>

    );
}

export default AboutUs;