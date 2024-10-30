import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const CarouselSlider = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <video
                        className="d-block w-100 carousel-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/carousel1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/Desig.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/Designer (2).png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/Designer (4).png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/slider music.png"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <style jsx>{`
                .carousel-container {
                    position: relative;
                }

                .carousel-video,
                .carousel-image {
                    width: 100%;
                    object-fit: cover; /* Maintain aspect ratio */
                }

                .carousel-video {
                    height: 90vh; /* Default height for larger screens */
                }

                .carousel-image {
                    height: 90vh; /* Default height for larger screens */
                }

                /* Responsive Styles */
                @media (max-width: 768px) { /* For tablets */
                    .carousel-video,
                    .carousel-image {
                        height: 70vh; /* Adjust height for tablets */
                    }
                }

                @media (max-width: 480px) { /* For mobile devices */
                    .carousel-video,
                    .carousel-image {
                        height: 60vh; /* Adjust height for mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default CarouselSlider;
