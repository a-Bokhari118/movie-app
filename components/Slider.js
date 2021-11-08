import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <section className="relative shadow-2xl  mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="slider logo" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="slider logo" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="slider logo" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="slider logo" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
