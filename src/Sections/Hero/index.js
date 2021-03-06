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
          <Title>"Staro???? nie rado????, m??odo???? nie wieczno????."</Title>
          <SubText>
            "Nie starzeje si?? ten, kto nie ma na to czasu." - Benjamin Franklin
          </SubText>
          <CTA onClick={() => setModalIsOpen(true)}>
            Wi??cej &nbsp; <img src={Arrow} alt="..." />
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
              Staro????
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Granica mi??dzy wiekiem ??rednim cz??owieka a staro??ci?? jest p??ynna i
              zmienia??a si?? w ci??gu wiek??w. W czasach prehistorycznych ludzie
              do??ywali 30 (neandertalczyk z Krapiny) ??? 35 lat (szkielety z Sima
              de los Huesos w Atapuerca) [1]. W staro??ytno??ci cz??owiek
              35???40-letni by?? uwa??any za cz??owieka starego. ??rednia d??ugo????
              ??ycia, a co za tym idzie "granica" staro??ci na ??wiecie bardzo
              wyd??u??y??a si?? w XVIII, XIX oraz XX wieku, wraz z popraw?? warunk??w
              ??ycia, rozwojem medycyny oraz upowszechnieniem takich wynalazk??w
              jak np. kanalizacja, kt??re podwy??sza??y poziom higieny, oraz
              wynalezieniem szczepionek, kt??re zapobiega??y chorobom (zob. te??
              oczekiwana dalsza d??ugo???? trwania ??ycia). Zwi??kszenie d??ugo??ci
              ??ycia skutkowa??o pojawieniem si?? dziadk??w co zwi??ksza??o szans??
              prze??ycia m??odych osobnik??w, by??o skorelowane z rozwojem relacji
              spo??ecznych i przekazywaniem do??wiadcze?? [1]. W kulturach na ca??ym
              ??wiecie ludzie w podesz??ym wieku byli zwykle obdarzani du??ym
              szacunkiem ??? niekiedy nawet czci?? ??? jako ludzie bardziej
              do??wiadczeni i m??drzejsi.
            </p>
            <br />
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Poj??cie staro??ci w znaczeniu medycznym to og???? zmian biologicznych
              zachodz??cych w ciele cz??owieka (g????wnie zu??ycie narz??d??w i
              zmniejszona regeneracja kom??rek) w wieku starszym (tzw. trzeci
              wiek) czyli po 60???65 roku ??ycia. W okresie staro??ci ustaje
              intensywne odbudowywanie kom??rek, organizm jest mniej odporny na
              choroby, a uk??ad nerwowy jest mniej aktywny. Tkanki ludzkie staj??
              si?? odwodnione i mniej elastyczne, ulegaj?? atrofii. Obecnie w
              rozwini??tych spo??ecze??stwach ludzie prze??ywaj?? 70???90 lat,
              rekordzi??ci do??ywaj?? 120 lat, przy czym statystycznie d??u??ej ??yj??
              kobiety. W Stanach Zjednoczonych w ci??gu XX wieku przeci??tna
              d??ugo???? ??ycia wyd??u??y??a si?? z nieca??ych 50 lat do ok. 75 lat u
              m????czyzn i ok. 80 lat u kobiet [2]. Do??ywanie s??dziwego wieku
              wi????e si?? ze znacznym rozwojem medycyny. Jednak??e wyd??u??anie ??ycia
              u ludzi prowadzi do pojawiania si?? w strukturze spo??ecze??stwa
              znacznego odsetka os??b nie b??d??cych samodzielnymi, ze wzgl??du na
              np. zaburzenia uk??adu nerwowego zwi??zane z chorob?? Alzheimera,
              kt??rej objawami s?? m.in. zaburzenia pami??ci, zachowania i
              osobowo??ci.
            </p>
            <br />
            <p style={{ fontSize: "1.2rem", color: "var(--gray-2)" }}>
              Janusowe oblicze staro??ci ??? pozytywne i negatywne ??? dostrzegali
              ju?? staro??ytni filozofowie. Jest te?? widoczne we wsp????czesnym
              spostrzeganiu os??b starszych i w postawach wobec nich (np. wzorce
              pozytywne: typ wzorowego dziadka, m??drca, patriarchy lub
              negatywne: typ cz??owieka s??abego, osamotnionego, niezaanga??owanego
              spo??ecznie, ???z??o??liwca??? i ???sk??pca???). W XIX i XX wieku wykonano
              liczne psychologiczne badania osobowo??ci ludzi starzej??cych si??.
              Zaproponowano podzia?? proces??w starzenia si?? na trzy grupy:
              starzenie si?? normalne (fizjologiczne), patologiczne i
              pomy??lne/optymalne. Poj??cie ???starzenia pomy??lne??? spopularyzowa??
              Robert J. Havighurst (1961), kt??ry w artykule opublikowanym w
              pierwszym wydaniu The Gerontologist napisa??, ??e o pomy??lnym
              przebiegu tego procesu decyduj?? dwa warunki, okre??lone
              metaforycznie: ???dodanie lat do ??ycia??? i ???dodanie ??ycia do lat???
              (ludzie starzej??cy si?? pomy??lnie ??yj?? d??u??ej i odczuwaj??
              satysfakcj?? ??yciow?? w wieku podesz??ym). Psycholodzy, zajmuj??cy si??
              zagadnieniami pomy??lnego starzenia si??.
            </p>
            <br />
            {/* <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Od najm??odszych lat samodzielnie rysowa??em i&nbsp;wycina??em
              z&nbsp;tektury figurki woj??w i&nbsp;rycerzy, by nast??pnie
              prowadzi?? ich do wielkich i&nbsp;zwyci??skich bitew. Jak
              wspomnia??em nie lubi??em t??um??w, ale za&nbsp;to ch??tnie
              uczestniczy??em w&nbsp;r????nych nabo??e??stwach religijnych, na kt??re
              prowadzali nas rodzice. Moja wrodzona niech???? do t??umnych,
              ha??a??liwych spotka?? oraz&nbsp;oficjalnych uroczysto??ci cechowa??a
              mnie r??wnie??, gdy by??em ju?? doros??ym cz??owiekiem i&nbsp;w??a??ciwie
              pozosta??a mi do dzi??.
            </p>
            <br />
            <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Mo??e dla wielu zaskakuj??cym b??dzie fakt, ??e&nbsp;jako dziecko
              ch??tnie bawi??em si?? w&nbsp;odprawianie Mszy ??wi??tej. By??em
              w&nbsp;tym tak wiarygodny, ??e&nbsp;m??j ojciec uwa??a??,
              i??&nbsp;w&nbsp;przysz??o??ci powinienem zosta?? ksi??dzem. Uwa??a?? mnie
              za&nbsp;ch??opca ??yciowo nieporadnego i&nbsp;duchowny stan wydawa??
              mu si?? rozwi??zaniem dla mnie bezpiecznym.
            </p>
            <br />
            <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
              Tylko mama, ta dobra i&nbsp;m??dra istota, wiedzia??a, ??e&nbsp;ja
              mia??em inne rojenia w&nbsp;g??owie ??? moim najwi??kszym marzeniem
              by??o malowanie. To w??a??nie ona zach??ca??a mnie do&nbsp;rysowania
              i&nbsp;chwali??a wszystko, co utrwala??em na papierze ??? od sprz??t??w
              domowych, po podobizny ludzi i&nbsp;zwierz??t.
            </p> */}
            <br />
            <p
              style={{
                fontSize: "1rem",
                color: "var(--gray-1)",
                fontStyle: "italic",
              }}
            >
              https://pl.wikipedia.org/wiki/Dobrostan_subiektywny#Starzenie_si??_i_staro????
              <br />
              https://pl.wikipedia.org/wiki/Staro????
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
