import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const CarouselSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src="/assets/Desig.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
                        src="/assets/Designer (2).png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
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
                    <img style={{ height: '100vh' }}
                        className="d-block w-100"
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
        </div>
    )
}

export default CarouselSlider