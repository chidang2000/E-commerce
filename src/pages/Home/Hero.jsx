import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Hero.scss";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import Button from "../../components/Button/Button";
import { BiCart } from "react-icons/bi";
const Hero = ({ data }) => {
  return (
    <div className="hero">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1000}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="hero__item">
            <div className="hero__info">
              <span className={`hero__title color-${item.color}`}>
                {item.title}
              </span>
              <span className="hero__desc">{item.description}</span>
              <Link to={item.path}>
                <Button
                  backgroundColor={item.color}
                  icon={<BiCart />}
                  animated={true}
                >
                  Xem Chi Tiết
                </Button>
              </Link>
            </div>
            <div className="hero__slider">
              <div className={`shape bg-${item.color}`}></div>
              <img src={item.img} alt={item.title} className="hero__img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
