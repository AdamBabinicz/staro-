import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Pink from "../../assets/6.png";
import White from "../../assets/4.png";
import Purple from "../../assets/5.png";
import Arrow from "../../assets/2.svg";
import Mobile from "../../assets/10.png";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const Herosection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--nav3);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav3);

  @media only Screen and (max-width: 40em) {
    font-size: calc(0.7rem + 0.5vw);
  }
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
    font-size: calc(0.8rem + 0.5vw);
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

Modal.setAppElement("#root");

const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Herosection id="home">
      <Blobs>
        <PinkBlob>
          <img src={Pink} alt="..." />
        </PinkBlob>
        <WhiteBlob>
          <img src={White} alt="..." />
        </WhiteBlob>
        <PurpleBlob>
          <img src={Purple} alt="..." />
        </PurpleBlob>
      </Blobs>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle />
            <span>Aforyzmy, cytaty</span>
          </Topic>
          <Title>"Starość nie radość, młodość nie wieczność."</Title>
          <SubText>
            "Nie starzeje się ten, kto nie ma na to czasu." - Benjamin Franklin
          </SubText>
          <CTA onClick={() => setModalIsOpen(true)}>
            Więcej &nbsp; <img src={Arrow} alt="..." />
          </CTA>

          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,.8)",
                zIndex: 100,
              },
              content: {
                position: "absolute",
                top: "80px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                marginBottom: "2rem",
                color: "var(--gray-1)",
              }}
            >
              Starość
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Granica między wiekiem średnim człowieka a starością jest płynna i
              zmieniała się w ciągu wieków. W czasach prehistorycznych ludzie
              dożywali 30 (neandertalczyk z Krapiny) – 35 lat (szkielety z Sima
              de los Huesos w Atapuerca) [1]. W starożytności człowiek
              35–40-letni był uważany za człowieka starego. Średnia długość
              życia, a co za tym idzie "granica" starości na świecie bardzo
              wydłużyła się w XVIII, XIX oraz XX wieku, wraz z poprawą warunków
              życia, rozwojem medycyny oraz upowszechnieniem takich wynalazków
              jak np. kanalizacja, które podwyższały poziom higieny, oraz
              wynalezieniem szczepionek, które zapobiegały chorobom (zob. też
              oczekiwana dalsza długość trwania życia). Zwiększenie długości
              życia skutkowało pojawieniem się dziadków co zwiększało szansę
              przeżycia młodych osobników, było skorelowane z rozwojem relacji
              społecznych i przekazywaniem doświadczeń [1]. W kulturach na całym
              świecie ludzie w podeszłym wieku byli zwykle obdarzani dużym
              szacunkiem – niekiedy nawet czcią – jako ludzie bardziej
              doświadczeni i mądrzejsi.
            </p>
            <br />
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Pojęcie starości w znaczeniu medycznym to ogół zmian biologicznych
              zachodzących w ciele człowieka (głównie zużycie narządów i
              zmniejszona regeneracja komórek) w wieku starszym (tzw. trzeci
              wiek) czyli po 60–65 roku życia. W okresie starości ustaje
              intensywne odbudowywanie komórek, organizm jest mniej odporny na
              choroby, a układ nerwowy jest mniej aktywny. Tkanki ludzkie stają
              się odwodnione i mniej elastyczne, ulegają atrofii. Obecnie w
              rozwiniętych społeczeństwach ludzie przeżywają 70–90 lat,
              rekordziści dożywają 120 lat, przy czym statystycznie dłużej żyją
              kobiety. W Stanach Zjednoczonych w ciągu XX wieku przeciętna
              długość życia wydłużyła się z niecałych 50 lat do ok. 75 lat u
              mężczyzn i ok. 80 lat u kobiet [2]. Dożywanie sędziwego wieku
              wiąże się ze znacznym rozwojem medycyny. Jednakże wydłużanie życia
              u ludzi prowadzi do pojawiania się w strukturze społeczeństwa
              znacznego odsetka osób nie będących samodzielnymi, ze względu na
              np. zaburzenia układu nerwowego związane z chorobą Alzheimera,
              której objawami są m.in. zaburzenia pamięci, zachowania i
              osobowości.
            </p>
            <br />
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Janusowe oblicze starości – pozytywne i negatywne – dostrzegali
              już starożytni filozofowie. Jest też widoczne we współczesnym
              spostrzeganiu osób starszych i w postawach wobec nich (np. wzorce
              pozytywne: typ wzorowego dziadka, mędrca, patriarchy lub
              negatywne: typ człowieka słabego, osamotnionego, niezaangażowanego
              społecznie, „złośliwca” i „skąpca”). W XIX i XX wieku wykonano
              liczne psychologiczne badania osobowości ludzi starzejących się.
              Zaproponowano podział procesów starzenia się na trzy grupy:
              starzenie się normalne (fizjologiczne), patologiczne i
              pomyślne/optymalne. Pojęcie „starzenia pomyślne” spopularyzował
              Robert J. Havighurst (1961), który w artykule opublikowanym w
              pierwszym wydaniu The Gerontologist napisał, że o pomyślnym
              przebiegu tego procesu decydują dwa warunki, określone
              metaforycznie: „dodanie lat do życia” i „dodanie życia do lat”
              (ludzie starzejący się pomyślnie żyją dłużej i odczuwają
              satysfakcję życiową w wieku podeszłym). Psycholodzy, zajmujący się
              zagadnieniami pomyślnego starzenia się.
            </p>
            <br />
            {/* <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Od najmłodszych lat samodzielnie rysowałem i&nbsp;wycinałem
              z&nbsp;tektury figurki wojów i&nbsp;rycerzy, by następnie
              prowadzić ich do wielkich i&nbsp;zwycięskich bitew. Jak
              wspomniałem nie lubiłem tłumów, ale za&nbsp;to chętnie
              uczestniczyłem w&nbsp;różnych nabożeństwach religijnych, na które
              prowadzali nas rodzice. Moja wrodzona niechęć do tłumnych,
              hałaśliwych spotkań oraz&nbsp;oficjalnych uroczystości cechowała
              mnie również, gdy byłem już dorosłym człowiekiem i&nbsp;właściwie
              pozostała mi do dziś.
            </p>
            <br />
            <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Może dla wielu zaskakującym będzie fakt, że&nbsp;jako dziecko
              chętnie bawiłem się w&nbsp;odprawianie Mszy Świętej. Byłem
              w&nbsp;tym tak wiarygodny, że&nbsp;mój ojciec uważał,
              iż&nbsp;w&nbsp;przyszłości powinienem zostać księdzem. Uważał mnie
              za&nbsp;chłopca życiowo nieporadnego i&nbsp;duchowny stan wydawał
              mu się rozwiązaniem dla mnie bezpiecznym.
            </p>
            <br />
            <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Tylko mama, ta dobra i&nbsp;mądra istota, wiedziała, że&nbsp;ja
              miałem inne rojenia w&nbsp;głowie – moim największym marzeniem
              było malowanie. To właśnie ona zachęcała mnie do&nbsp;rysowania
              i&nbsp;chwaliła wszystko, co utrwalałem na papierze – od sprzętów
              domowych, po podobizny ludzi i&nbsp;zwierząt.
            </p> */}
            <br />
            <p
              style={{
                fontSize: "1rem",
                color: "var(--gray-1)",
                fontStyle: "italic",
              }}
            >
              https://pl.wikipedia.org/wiki/Dobrostan_subiektywny#Starzenie_się_i_starość
              <br />
              https://pl.wikipedia.org/wiki/Starość
            </p>
            <div>
              <button
                style={{
                  width: "2rem",
                  height: "2rem",
                  position: "absolute",
                  top: ".5rem",
                  right: ".5rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setModalIsOpen(false)}
              >
                <MdClose />
              </button>
            </div>
          </Modal>
        </LeftBlock>
        <MobileSvg src={Mobile} alt="..." />
      </MainContent>
    </Herosection>
  );
};

export default HeroSection;
