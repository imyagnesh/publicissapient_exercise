/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">What People Say About me?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi{' '}
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="testimonial-col">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt="Yagnesh" title="Yagnesh" />
            </div>
            <h6>Jennifer Lutheran</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          {/* col */}
          <div className="testimonial-col">
            <div className="img">
              <img src="static/img/avtar2.jpg" alt="Yagnesh" title="Yagnesh" />
            </div>
            <h6>Jennifer Lutheran</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          {/* col */}
          <div className="testimonial-col">
            <div className="img">
              <img src="static/img/avtar3.jpg" alt="Yagnesh" title="Yagnesh" />
            </div>
            <h6>Jennifer Lutheran</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          {/* col */}
          <div className="testimonial-col">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt="Yagnesh" title="Yagnesh" />
            </div>
            <h6>Jennifer Lutheran</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          {/* col */}
        </Slider>
      </div>
      {/* owl */}
      {/* col */}
      {/* row */}
      {/* container */}
    </section>
  );
};

export default Testimonial;
