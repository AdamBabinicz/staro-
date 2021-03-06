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
    padding: 0 4rem;
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
    width: 100%;
    left: 10%;
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
        <Title className="title">Proces starzenia si??</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>
      <Content>
        <TextBlock
          topic="Staro????"
          title={
            <h2>"Zrozumie?? staro????. Jak zmienia si?? starzej??cy organizm?"</h2>
          }
          subText={
            <h5>
              "Proces starzenia si?? na poziomie narz??d??w zaczyna si?? ju?? mi??dzy
              30. a 40. rokiem ??ycia i post??puje w tempie ??rednio 0,75-0,80%
              rocznie, czyli nieco mniej ni?? 10% na dekad??. Na przyspieszenie
              tego procesu wp??ywa nieodpowiedni styl ??ycia, a zw??aszcza brak
              aktywno??ci ruchowej oraz niezdrowe od??ywianie jak przejadanie si??
              czy cz??ste si??ganie po t??uszcze zwierz??ce oraz u??ywki. Jednak
              dzisiaj skupimy si?? nie na sposobie od??ywiania i zdrowych
              nawykach, ale na tym, jak zmienia si?? nasz organizm w wyniku
              starzenia. A zmienia si?? sporo! <br /> <br /> Starzenie si??
              dosi??ga r??wnie?? uk??ad nerwowy. Prowadzi do zmniejszenia masy
              m??zgu, zaburze?? syntezy neuroprzeka??nik??w odpowiedzialnych za
              przesy?? informacji mi??dzy kom??rkami. Wszystko to powoduje
              spowolnienie przetwarzania informacji, pami??ci i koncentracji.
              Senior ma problem, aby skupia?? swoj?? uwag?? d??u??ej. Ma??o tego,
              ka??de kolejne uszkodzenie kom??rek lub pogorszenie si?? ich funkcji
              wywo??uje zaburzenia psychiczne."
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
          topic="staro????"
          title={<h2>"Zmniejszenie sprawno??ci fizycznej"</h2>}
          subText={
            <h5>
              "Pierwsz?? zauwa??aln?? zmian?? jest zmniejszenie sprawno??ci
              fizycznej, co wynika ze zmniejszenia masy i si??y mi????ni oraz
              ograniczenia ruchomo??ci w stawach. Na zmniejszenie masy mi????ni
              wp??ywa siedz??cy tryb ??ycia oraz niedo??ywienie, kt??re jest dosy??
              cz??ste u senior??w. Dochodzi r??wnie?? do zmniejszenia g??sto??ci
              tkanek kostnych, a to sprzyja osteoporozie. <br /> <br /> W razie
              upadku zwi??ksza si?? ryzyko z??amania ko??ci, ponadto cz????ciej
              pojawiaj?? si?? si??ce lub dolegliwo??ci b??lowe, co nie sprzyja
              podejmowaniu codziennych aktywno??ci. W tym przypadku eksperci
              zalecaj?? suplementacj?? witaminy D3 oraz wapnia (tylko po
              konsultacji z lekarzem!). Suplementacja jest bardzo wa??na,
              poniewa?? wspiera uk??ad kostny i mi????niowy, a w przypadku
              osteoporozy mo??e dochodzi?? do z??ama?? nawet w wyniku stania ??? ko??ci
              ??ami?? si?? pod wp??ywem ci????aru cia??a."
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
          topic="Staro????"
          title={<h2>Starzej??ce si?? zmys??y</h2>}
          subText={
            <h5>
              Typowe dla procesu starzenia s?? zmiany w narz??dach zmys??u. W
              przypadku wzroku jest to najcz????ciej dalekowzroczno????, dlatego
              senior cz??sto odsuwa przedmiot od twarzy, aby zobaczy?? szczeg????y.
              Mog?? si?? pojawi?? problemy ze s??uchem, a konkretnie ze
              s??yszalno??ci?? niekt??rych ton??w, co mo??e spowodowa?? niezrozumienie
              mowy, zw??aszcza jak w????czone s?? tzw. ???zag??uszacze??? typu radio czy
              telewizor ??? wszystkie d??wi??ki zlewaj?? si?? wtedy w jedn?? ca??o????. U
              senior??w zmienia si?? r??wnie?? smak. Dochodzi wtedy do zaburze??
              odczuwania smaku i spadku przyjemno??ci ze spo??ywania potraw. Jest
              to wynik nie tylko spadku wra??liwo??ci kubk??w smakowych, ale te??
              problem??w z dok??adnym ??uciem i prze??uwaniem. <br /> <br />
              Ograniczenie odczuwania pragnienia powoduje nieodpowiednie
              nawodnienie organizmu. To mo??e doprowadzi?? do b????dnego ko??a:
              zmniejszenie obj??to??ci przyjmowania p??yn??w prowadzi do pogorszenia
              funkcji nerek i zmniejszenia wra??liwo??ci o??rodka pragnienia, to z
              kolei prowadzi do odwodnienia, a odwodnienie do zaburzenia funkcji
              psychicznych ??? kt??re prowadzi do punktu pierwszego, czyli
              zmniejszenia ilo??ci przyjmowanych p??yn??w.
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" />
        </OBJ>
        <SvgBlock svg="7.svg" /> <br />
      </Content>
      <p>
        https://servitum.pl/poradniki/zrozumiec-starosc-jak-zmienia-sie-starzejacy-organizm
      </p>
    </ServiceSection>
  );
};

export default Services;
