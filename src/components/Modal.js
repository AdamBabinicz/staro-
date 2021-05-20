import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
// import styled from "styled-components";
import { MdClose } from "react-icons/md";
import img1 from "../images/20.jpg";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 2rem;
  /* grid-template-columns: repeat(2, 1fr); */
  position: relative;
  z-index: 1000;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 380px;
  }
`;

const ModalImg = styled.img`
  width: auto;
  height: auto;
  border-radius: 10px 0 0 0;
  background: #000;

  @media (max-width: 640px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  line-height: 1.5;
  color: #141414;

  h1 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    margin: 2rem 0;
    text-align: justify;
    padding-right: 2rem;
    font-size: 0.8rem;

    @media (max-width: 640px) {
      margin: 0;
      padding: 1rem;
    }
  }

  /* button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  } */
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={img1} alt="Faustyna" />
              <ModalContent>
                <h1>Objawienia i mistyczne przeżycia</h1>
                <p>
                  Na polecenie jednego ze swoich spowiedników, ks. Michała
                  Sopoćki, Faustyna zaczęła prowadzić szczegółowy zapis swoich
                  przeżyć, znany potem jako Dzienniczek. Opisywała w nim
                  cierpienia i przeciwności, stany mistyczne jakich doznawała,
                  przede wszystkim liczne wizje i objawienia. Dotyczyły one
                  między innymi namalowania obrazu Jezu ufam Tobie (do którego
                  Jezus miał dać szczegółowe wskazówki), modlitw Koronki do
                  Miłosierdzia Bożego i Godziny Miłosierdzia [18], ustanowienia
                  święta Miłosierdzia Bożego (w pierwszą niedzielę po
                  Wielkanocy), szerzenia czci Miłosierdzia i obietnic z nim
                  związanych, oraz powołania do życia nowego zgromadzenia, czyli
                  takiego dzieła w Kościele, które by podjęło zadanie
                  wypraszania miłosierdzia dla świata (Apostolski Ruch Bożego
                  Miłosierdzia). Zapisała również polecenie Jezusa Chrystusa
                  żądającego, by zostało założone nowe zgromadzenie głoszące na
                  cały świat kult Miłosierdzia Bożego. Zgromadzenie to miało
                  również zrzeszać wszystkich świeckich wiernych Kościoła
                  katolickiego. Nakaz ten urzeczywistnił się wraz z powołaniem
                  do życia Zgromadzenia Sióstr Jezusa Miłosiernego i powołaniem
                  świeckiego Apostolskiego Ruchu Bożego Miłosierdzia [6].
                </p>
                {/* <button>Join Now</button> */}
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
