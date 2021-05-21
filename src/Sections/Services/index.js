import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/16.png";
import Cone from "../../assets/14.png";
import Capsule from "../../assets/13.png";

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;

  p {
    color: var(--nav3);
    font-style: italic;
    font-size: 0.8rem;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h2`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
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

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;

  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">Proces starzenia się</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>
      <Content>
        <TextBlock
          topic="Starość"
          title={
            <h2>"Zrozumieć starość. Jak zmienia się starzejący organizm?"</h2>
          }
          subText={
            <h5>
              "Proces starzenia się na poziomie narządów zaczyna się już między
              30. a 40. rokiem życia i postępuje w tempie średnio 0,75-0,80%
              rocznie, czyli nieco mniej niż 10% na dekadę. Na przyspieszenie
              tego procesu wpływa nieodpowiedni styl życia, a zwłaszcza brak
              aktywności ruchowej oraz niezdrowe odżywianie jak przejadanie się
              czy częste sięganie po tłuszcze zwierzęce oraz używki. Jednak
              dzisiaj skupimy się nie na sposobie odżywiania i zdrowych
              nawykach, ale na tym, jak zmienia się nasz organizm w wyniku
              starzenia. A zmienia się sporo! <br /> <br /> Starzenie się
              dosięga również układ nerwowy. Prowadzi do zmniejszenia masy
              mózgu, zaburzeń syntezy neuroprzekaźników odpowiedzialnych za
              przesył informacji między komórkami. Wszystko to powoduje
              spowolnienie przetwarzania informacji, pamięci i koncentracji.
              Senior ma problem, aby skupiać swoją uwagę dłużej. Mało tego,
              każde kolejne uszkodzenie komórek lub pogorszenie się ich funkcji
              wywołuje zaburzenia psychiczne."
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" />
        </OBJ>
        <SvgBlock svg="5.svg" />
      </Content>
      <Content>
        {/* ref={addToRefs} */}
        <TextBlock
          topic="starość"
          title={<h2>"Zmniejszenie sprawności fizycznej"</h2>}
          subText={
            <h5>
              "Pierwszą zauważalną zmianą jest zmniejszenie sprawności
              fizycznej, co wynika ze zmniejszenia masy i siły mięśni oraz
              ograniczenia ruchomości w stawach. Na zmniejszenie masy mięśni
              wpływa siedzący tryb życia oraz niedożywienie, które jest dosyć
              częste u seniorów. Dochodzi również do zmniejszenia gęstości
              tkanek kostnych, a to sprzyja osteoporozie. <br /> <br /> W razie
              upadku zwiększa się ryzyko złamania kości, ponadto częściej
              pojawiają się sińce lub dolegliwości bólowe, co nie sprzyja
              podejmowaniu codziennych aktywności. W tym przypadku eksperci
              zalecają suplementację witaminy D3 oraz wapnia (tylko po
              konsultacji z lekarzem!). Suplementacja jest bardzo ważna,
              ponieważ wspiera układ kostny i mięśniowy, a w przypadku
              osteoporozy może dochodzić do złamań nawet w wyniku stania – kości
              łamią się pod wpływem ciężaru ciała."
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" />
        </OBJ>
        <SvgBlock svg="6.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Starość"
          title={<h2>Starzejące się zmysły</h2>}
          subText={
            <h5>
              Typowe dla procesu starzenia są zmiany w narządach zmysłu. W
              przypadku wzroku jest to najczęściej dalekowzroczność, dlatego
              senior często odsuwa przedmiot od twarzy, aby zobaczyć szczegóły.
              Mogą się pojawić problemy ze słuchem, a konkretnie ze
              słyszalnością niektórych tonów, co może spowodować niezrozumienie
              mowy, zwłaszcza jak włączone są tzw. „zagłuszacze” typu radio czy
              telewizor – wszystkie dźwięki zlewają się wtedy w jedną całość. U
              seniorów zmienia się również smak. Dochodzi wtedy do zaburzeń
              odczuwania smaku i spadku przyjemności ze spożywania potraw. Jest
              to wynik nie tylko spadku wrażliwości kubków smakowych, ale też
              problemów z dokładnym żuciem i przeżuwaniem. <br /> <br />
              Ograniczenie odczuwania pragnienia powoduje nieodpowiednie
              nawodnienie organizmu. To może doprowadzić do błędnego koła:
              zmniejszenie objętości przyjmowania płynów prowadzi do pogorszenia
              funkcji nerek i zmniejszenia wrażliwości ośrodka pragnienia, to z
              kolei prowadzi do odwodnienia, a odwodnienie do zaburzenia funkcji
              psychicznych … które prowadzi do punktu pierwszego, czyli
              zmniejszenia ilości przyjmowanych płynów.
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" />
        </OBJ>
        <SvgBlock svg="7.svg" /> <br />
        <p>
          https://servitum.pl/poradniki/zrozumiec-starosc-jak-zmienia-sie-starzejacy-organizm
        </p>
      </Content>
    </ServiceSection>
  );
};

export default Services;
