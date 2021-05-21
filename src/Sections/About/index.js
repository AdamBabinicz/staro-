import styled, { keyframes } from "styled-components";
import wave from "../../assets/3.svg";
import hand from "../../assets/3.png";
import rocket from "../../assets/7.png";
import human from "../../assets/12.png";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;

const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 2rem;
  margin-top: 2rem;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--nav3);
  border-color: var(--nav3) transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    /* max-width: 50vw; */
    width: 100%;
    height: auto;
    padding-bottom: 0;
    background: violet;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  margin-top: 2rem;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(255, 255, 255, 0.9);

  em {
    font-size: 1rem;

    @media only Screen and (max-width: 40em) {
      font-size: 0.8rem;
    }
  }

  @media only Screen and (max-width: 40em) {
    margin-top: 3rem;
  }
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="..." />
      <Hand>
        <img src={hand} alt="..." />
      </Hand>
      <Main>
        <div>
          <Title>Starość</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="..." />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="..." />
            </Human>
            <Text>
              "Starość określana jest jako jesień życia, druga młodość, złoty
              wiek życia czy trzeci wiek. Jest to ostatni etap życia człowieka,
              etap nieunikniony, którego doświadczy lub doświadcza każdy,
              którego życie nie zostanie w tragiczny sposób przerwane w
              młodości. Jest to czas, który przebiega bardzo różnie u różnych
              ludzi – odcieni starości jest tak wiele, jak wiele jest ludzkich
              historii."
              <br />
              <em>https://seni.pl/pl_PL/baza-wiedzy-seni/odcienie-starosci</em>
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--nav3)" }} />
              <Circle style={{ backgroundColor: "var(--nav3)" }} />
              <Circle style={{ backgroundColor: "var(--nav3)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
