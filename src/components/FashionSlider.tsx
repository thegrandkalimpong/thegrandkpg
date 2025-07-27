import React, { useEffect } from "react";

const Fashionslider = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://fashion-slider.uiinitiative.com/assets/index.fca86069.css";
        document.head.appendChild(link);

        // Add the module preload link
        const preloadLink = document.createElement("link");
        preloadLink.rel = "modulepreload";
        preloadLink.href =
            "https://fashion-slider.uiinitiative.com/assets/vendor.688a9bfa.js";
        document.head.appendChild(preloadLink);

        // Add the external script
        const script = document.createElement("script");
        script.type = "module";
        script.crossOrigin = "anonymous";
        script.src =
            " https://fashion-slider.uiinitiative.com/assets/index.ff8f4572.js";
        document.body.appendChild(script);

        // Cleanup script and links on unmount
        return () => {
            document.head.removeChild(link);
            document.head.removeChild(preloadLink);
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div className="fashion-slider relative -top-24 h-screen w-full">
                <div className="swiper h-screen">
                    <div className="swiper-wrapper h-screen">
                        <div
                            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            data-slide-bg-color="#D1C4B4"
                        >
                            {/* slide title wrap */}
                            <div
                                className="fashion-slider-title flex h-screen flex-col items-center justify-center"
                                data-swiper-parallax="-130%"
                            >
                                <div className="fashion-slider-title-text">
                                    Nike
                                </div>
                            </div>
                            <div className="fashion-slider-scale">
                                {/* slide image */}
                                <img src="/assets/room1.webp" alt="Nike" />
                            </div>
                        </div>

                        <div
                            className="swiper-slide swiper-slide-next"
                            data-slide-bg-color="#9594A4"
                        >
                            {/* slide title wrap */}
                            <div
                                className="fashion-slider-title flex h-screen flex-col items-center justify-center"
                                data-swiper-parallax="-130%"
                            >
                                {/* slide title text */}
                                <div className="fashion-slider-title-text">
                                    Puma
                                </div>
                            </div>
                            {/* slide image wrap */}
                            <div className="fashion-slider-scale">
                                {/* slide image */}
                                <img src="/assets/room6.jpg" alt="Puma" />
                            </div>
                        </div>

                        <div
                            className="swiper-slide"
                            data-slide-bg-color="#6A929D"
                        >
                            <div
                                className="fashion-slider-title flex h-screen flex-col items-center justify-center"
                                data-swiper-parallax="-130%"
                            >
                                <div className="fashion-slider-title-text">
                                    Yeeze
                                </div>
                            </div>
                            <div className="fashion-slider-scale">
                                <img src="/assets/room3.webp" alt="Puma" />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="fashion-slider-button-prev fashion-slider-button fashion-slider-button-disabled">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 350 160 90"
                        >
                            <g className="fashion-slider-svg-wrap">
                                <g className="fashion-slider-svg-circle-wrap">
                                    <circle cx="42" cy="42" r="40"></circle>
                                </g>
                                <path
                                    className="fashion-slider-svg-arrow"
                                    d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                                />
                                <path
                                    className="fashion-slider-svg-line"
                                    d="M80,0H0"
                                />
                            </g>
                        </svg>
                    </div>
                    {/*  */}
                    <div className="fashion-slider-button-next fashion-slider-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 350 160 90"
                        >
                            <g className="fashion-slider-svg-wrap">
                                <g className="fashion-slider-svg-circle-wrap">
                                    <circle cx="42" cy="42" r="40"></circle>
                                </g>
                                <path
                                    className="fashion-slider-svg-arrow"
                                    d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                                />
                                <path
                                    className="fashion-slider-svg-line"
                                    d="M80,0H0"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fashionslider;
