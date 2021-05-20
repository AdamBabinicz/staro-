import React, { lazy } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h2`
  color: var(--white);
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--nav3);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: var(--nav3);
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: var(--nav3);
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Title>Długowieczni</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Obecnie najstarszym człowiekiem świata jest Kane Tanaka, czyli japońska superstulatka. Kane Tanaka 2 stycznia skończyła 118 lat. (ur. 02.01.1903)"
            name="Kane Tanaka"
            image="23"
          />

          <Card
            text="Za rekordzistkę długości życia ludzkiego uznaje się Jeanne Louise Calment, obywatelkę Francji. Francuzka żyła 122 lata i 164 dni. (21.02.1875 - 04.08.1997)"
            name="Jeanne Louise Calment"
            image="22"
          />

          <Card
            text="Od kwietnia 1998 przysługiwał jej tytuł najstarszej żyjącej osoby na świecie. Należy do niej rekord długości życia w Stanach Zjednoczonych. (24.09.1880 - 30.12.1999)"
            name="Sarah DeRemer Knauss"
            image="21"
          />

          <Card
            text="Od 15 września 2017 roku do 21 kwietnia 2018 roku posiadała tytuł najstarszej żyjącej osoby na świecie. (04.08.1900 - 21.04.2018)"
            name="Nabi Tajima"
            image="26"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
