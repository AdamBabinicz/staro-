import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/1.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: var(--nav3);
  color: var(--white);
  position: relative;
  z-index: 500;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);

  @media only screen and (max-width: 40em) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 16rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
    width: 100%;
  }

  h3 {
    width: 100%;
    min-width: 19.5rem;
  }

  @media only screen and (max-width: 72em) {
    h3 {
      display: none;
    }
  }
`;

const Nav = styled.div`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--nav);
    }
  }
`;

const Button = styled.button`
  background: var(--nav);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  position: relative;
  background: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;

  @media only screen and (max-width: 48em) {
    display: inline-block;
  }

  &:before,
  &:after {
    content: "";
    background: var(--white);
    width: 2rem;
    height: 4px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background: var(--nav3);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Headers ref={ref}>
      <Logo>
        <img src={logo} alt="..." />
        <h3>Starość nie radość</h3>
      </Logo>
      <Nav>
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Start
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          Starość
        </a>
        <a href="#services" onClick={(e) => scrollUp("services", e)}>
          Proces
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <Button>Kontakt</Button>
        </a>
      </Nav>
      <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Start
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          Starość
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Proces
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button>Kontakt</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
