import { moSize, titleStyle } from "../../style/GlobalStyle";
import "../../style/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: ${titleStyle.subfontSize};
  font-weight: ${titleStyle.fontWeight};
  margin-bottom: 30px;
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.title};
    margin-top: 40px;
  }
`;

const CoverBg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 500px) {
    height: 120px;
  }
`;

const MovieTitle = styled.h3`
  font-weight: 500;
  margin-top: 15px;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.2,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.2,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.2,
    },
  },
};

SwiperCore.use([Navigation]);

export const MovieSection = ({ movieData, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} {...params} navigation>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <CoverBg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${play.backdrop_path})`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
