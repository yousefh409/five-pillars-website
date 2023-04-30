import React, { useState } from "react";
import "./Home.css";
import capture from '../../Capture.jpg';
import bury from '../../bury.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import cemetarypic from '../../cemetarypic.jpg';
import graves from '../../graves.jpeg';
import gate from '../../gate.jpeg';
import logo from '../../image (1).png';
// import logo from '../../.png';
export const Homepage = () => {
    return (

        <main>
            <div>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

                {/* <a className="skip-link screen-reader-text" href="#content">Skip to content</a> */}
                <div id="boxed-wrapper">
                    <div className="fusion-sides-frame" />

                    <div className="fusion-clearfix" />
                    {/* </header> */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
                    <Carousel>
                        <Carousel.Item>
                            <div id="overlay">
                                <img
                                    id="gate-img"
                                    className="d-block w-100"
                                    src={gate}
                                    alt="First slide"
                                    style={{height:"80vh"}}
                                />
                            </div>

                            <Carousel.Caption style={{top:"50%", bottom:"auto"}}>
                                
                                <a href="#buttons"><Button variant="success" size="lg">Visiting Hours</Button></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div id ="overlay">
                                <img
                                    id="gate-img"
                                    className="d-block w-100"
                                    src={graves}
                                    alt="Second slide"
                                    style={{height:"80vh"}}
                                />
                            </div>
                            <Carousel.Caption>
                                <a href = "#buttons"><Button variant="success" size="lg">Burial Services</Button></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <main id="main" className="clearfix width-100">
                        <div className="fusion-row" style={{ maxWidth: '100%' }}>
                            <section id="content" className="full-width">
                                <div id="post-16572" className="post-16572 page type-page status-publish has-post-thumbnail hentry">

                                    <div className="post-content">

                                        {/* <br /> <br /> */}

                                        <section class="about-us">
                                            <div class="about">
                                                <img src={bury} class="pic" />
                                                <div class="text">
                                                    <h2 style={{ padding: "0", fontSize: "8vw" }}>About Us</h2>
                                                    <h5>Local Cemetary</h5>
                                                    <p>5 Pillars Cemetery is the first and the oldest cemetery for Muslims in the San Francisco-Bay Area.
                                                        Efforts to search for land and establish a Muslim-owned cemetery started around the year 1994–1995.
                                                        As the Muslim population continues to grow, the need for a Muslim cemetery to complement the funeral services and related facilities at mosques is a
                                                        priority to ensure that the Islamic traditions of burial are preserved for our families now and in the future.</p>

                                                </div>
                                            </div>
                                        </section>

                                        <div>
                                            <h2 className="title-heading-center fusion-responsive-typography-calculated" style={{ margin: 0, fontsize: 38, lineHeight: '1.26', textAlign: "center" }}>In the Name of
                                                Allãh, the Most Beneficent, the Most Merciful</h2>
                                            <h3 id="aya"><i>إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</i></h3>
                                            <h3 style={{ textAlign: "center" }}><i>

                                                “Truly! To Allãh we belong and truly, to Him
                                                we shall return” </i><br />
                                                (Al-Qur’an, 2:156)</h3>


                                        </div>
                                        <div id="buttons">
                                            <Button variant="secondary" size="lg" onClick={() => {
                                                var x = document.getElementById("para2");
                                                if (x.style.display === "none") {
                                                    x.style.display = "block";
                                                    x.innerHTML = "Open 7 days a week including all public and Islamic holidays"
                                                } else {
                                                    x.style.display = "none";
                                                }
                                            }}>
                                                Visiting Hours
                                            </Button>

                                            <Button variant="secondary" size="lg" onClick={() => {
                                                var x = document.getElementById("para2");
                                                if (x.style.display === "none") {
                                                    x.style.display = "block";
                                                    x.innerHTML = "Monday-Sunday 10 AM - 5 PM"
                                                } else {
                                                    x.style.display = "none";
                                                }
                                            }}>
                                                Burial Times
                                            </Button>

                                        </div>

                                    </div>

                                    <p id="para2" style={{ display: 'none', width: "100%", textAlign: "center" }}>Monday-Sunday 10 AM - 5 PM</p>
                                    <div className="fusion-fullwidth fullwidth-box fusion-builder-row-6 fusion-flex-container nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style={{ backgroundColor: '#ffffff', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', borderWidth: '0px 0px 0px 0px', borderColor: '#eae9e9', borderStyle: 'solid' }}>
                                        <div className="fusion-builder-row fusion-row fusion-flex-align-items-flex-start" style={{ maxWidth: '1216.8px', marginLeft: 'calc(-4% / 2 )', marginRight: 'calc(-4% / 2 )' }}>
                                            <div className="fusion-layout-column fusion_builder_column fusion-builder-column-7 fusion_builder_column_1_1 1_1 fusion-flex-column">
                                                <div className="fusion-column-wrapper fusion-flex-justify-content-flex-start fusion-content-layout-column" style={{ backgroundPosition: 'left top', backgroundRepeat: 'no-repeat', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', padding: '0px 0px 0px 0px' }}>
                                                    <div className="fusion-separator fusion-full-width-sep" style={{ alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', width: '100%' }}>
                                                        <div className="fusion-separator-border sep-double" style={{ borderColor: '#eaeaea', borderTopWidth: '0px', borderBottomWidth: '0px' }}>
                                                        </div>
                                                    </div>
                                                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                                    @media only screen and (max-width:1024px) {\n                                                        .fusion-title.fusion-title-3 {\n                                                            margin-top: 0px !important;\n                                                            margin-right: 0px !important;\n                                                            margin-bottom: 10px !important;\n                                                            margin-left: 0px !important;\n                                                        }\n                                                    }\n\n                                                    @media only screen and (max-width:640px) {\n                                                        .fusion-title.fusion-title-3 {\n                                                            margin-top: 0px !important;\n                                                            margin-right: 0px !important;\n                                                            margin-bottom: 20px !important;\n                                                            margin-left: 0px !important;\n                                                        }\n                                                    }\n                                                " }} />

                                                    <div className="fusion-separator fusion-full-width-sep" style={{ alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', width: '100%' }}>
                                                        <div className="fusion-separator-border sep-double" style={{ borderColor: '#eaeaea', borderTopWidth: '0px', borderBottomWidth: '0px' }}>
                                                        </div>
                                                    </div>

                                                </div>
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                                .fusion-body .fusion-builder-column-7 {\n                                                    width: 100% !important;\n                                                    margin-top: 15px;\n                                                    margin-bottom: 15px;\n                                                }\n\n                                                .fusion-builder-column-7>.fusion-column-wrapper {\n                                                    padding-top: 0px !important;\n                                                    padding-right: 0px !important;\n                                                    margin-right: 1.92%;\n                                                    padding-bottom: 0px !important;\n                                                    padding-left: 0px !important;\n                                                    margin-left: 1.92%;\n                                                }\n\n                                                @media only screen and (max-width:1024px) {\n                                                    .fusion-body .fusion-builder-column-7 {\n                                                        width: 100% !important;\n                                                        order: 0;\n                                                    }\n\n                                                    .fusion-builder-column-7>.fusion-column-wrapper {\n                                                        margin-right: 1.92%;\n                                                        margin-left: 1.92%;\n                                                    }\n                                                }\n\n                                                @media only screen and (max-width:640px) {\n                                                    .fusion-body .fusion-builder-column-7 {\n                                                        width: 100% !important;\n                                                        order: 0;\n                                                    }\n\n                                                    .fusion-builder-column-7>.fusion-column-wrapper {\n                                                        margin-right: 1.92%;\n                                                        margin-left: 1.92%;\n                                                    }\n                                                }\n                                            " }} />
                                            </div>
                                        </div>
                                        <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                        .fusion-body .fusion-flex-container.fusion-builder-row-6 {\n                                            padding-top: 0px;\n                                            margin-top: 0px;\n                                            padding-right: 30px;\n                                            padding-bottom: 30px;\n                                            margin-bottom: 0px;\n                                            padding-left: 30px;\n                                        }\n                                    " }} />
                                    </div>
                                    <div id="our-cemetery-sites">
                                        <div className="fusion-fullwidth fullwidth-box fusion-builder-row-7 nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style={{ backgroundColor: '#ffffff', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', paddingTop: '0px', paddingRight: '30px', paddingBottom: '30px', paddingLeft: '30px', marginBottom: '0px', marginTop: '0px', borderWidth: '0px 0px 0px 0px', borderColor: '#eae9e9', borderStyle: 'solid' }}>
                                            <div className="fusion-builder-row fusion-row">
                                                <div className="fusion-layout-column fusion_builder_column fusion-builder-column-8 fusion_builder_column_1_1 1_1 fusion-one-full fusion-column-first fusion-column-last fusion-column-no-min-height" style={{ marginTop: '0px', marginBottom: '0px' }}>
                                                    <div className="fusion-column-wrapper fusion-flex-column-wrapper-legacy" style={{ backgroundPosition: 'left top', backgroundRepeat: 'no-repeat', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', padding: '0px 0px 0px 0px' }}>
                                                        <style type="text/css" dangerouslySetInnerHTML={{ __html: "" }} />
                                                        <div className="fusion-title title fusion-title-4 fusion-title-center fusion-title-text fusion-title-size-two" style={{ marginTop: '0px', marginRight: '0px', marginBottom: '10px', marginLeft: '0px' }}>
                                                            <div className="title-sep-container title-sep-container-left">
                                                                <div className="title-sep sep-single sep-solid" style={{ borderColor: '#e0dede' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fusion-clearfix" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section></div></main>
                </div ></div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </main>

    );
};