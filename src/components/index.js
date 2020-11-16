import React, { useState, useEffect, useMemo } from "react";
import {
  Section,
  H1,
  Profile,
  Projetos,
  Contato,
  Resume,
  BtnSearch,
  ArrowScroll
} from "./styles";

import Header from "./Header/index";
import Particles from "./Particles/index";
import Typewriter from "typewriter-effect";

import photo from "../assets/pedro.jpg";
import redentor from "../assets/redentor.svg";
import ded from "../assets/ded.svg";
import redplus from "../assets/redplus.png";
import reeducando from "../assets/reeducando.png";
import uenf from "../assets/cognicao-e-linguagem.svg";
import caci from "../assets/caci.png";

import FormContact from "../components/FormContact/index";

function Menu() {
  const projetos = [
    {
      nome: "Redentor",
      img: redentor,
      link: "https://redentor.edu.br/",
      tipo: "site",
      languages: ["Java", "VRaptor", "MySQL"],
    },
    {
      nome: "Dungeons & Dragons",
      img: ded,
      link: "https://ded.pedrofreire.dev/",
      tipo: "system",
      languages: ["Ruby on Rails", "ReactJs", "MongoDB"],
    },
    {
      nome: "Eventos",
      img: redplus,
      link: "https://eventos.redentor.edu.br/uniredentor",
      tipo: "system",
      languages: ["Java", "VRaptor", "MySQL"],
    },
    {
      nome: "Sistema Web - Uniredentor",
      img: reeducando,
      link: "http://sistemaweb.redentor.edu.br/",
      tipo: "system",
      languages: ["Java", "VRaptor", "MySQL"],
    },
    {
      nome: "Programa de Pós Graduação em Cognição e Linguagem",
      img: uenf,
      link: "http://www.pgcl.uenf.br/",
      tipo: "site",
      languages: ["Java", "VRaptor", "MySQL"],
    },
    {
      nome: "Clínica Médica Caci",
      img: caci,
      link: "http://caci.redentor.edu.br/",
      tipo: "system",
      languages: ["Java", "VRaptor", "MySQL"],
    },
  ];

  const educations = [
    {
      location: "Centro Universitário Redentor",
      area: "Information systems • 2019",
      graduation: "Bachelor's Degree",
    },
  ];

  const works = [
    {
      location: "Centro Universitário Redentor",
      role: "Systems Analyst • July 2017 - Current",
      about: "Full Stack Java Developer",
    },
    {
      location: "View Tech Informática",
      role: "Computer technician • Sep 2012 - Oct 2015",
      about: "Maintenance of computers and notebooks",
    },
  ];

  const skills = [
    {
      name: "Java",
      description: "Currently I work with the tool, my start with it was in 2017 and since then I continue to use it.",
    },
    {
      name: "Ruby on Rails",
      description: "I create two projects using Ruby",
    },
    {
      name: "ReactJS",
      description: "",
    },
  ];

  const [tipoAtual, setTipoAtual] = useState("all");
  const projetosAtuais = useMemo(
    () => projetos.filter((f) => tipoAtual === "all" || f.tipo === tipoAtual),
    [tipoAtual]
  );

  const [scroll, setScroll] = useState("none");
  const [showScroll, setShowScroll] = useState(false)

  function arrowScroll(){
    setShowScroll(document.body.scrollTop > 100);

      if (document.body.scrollTop < 100) {
        setScroll("scroll");
        setShowScroll(false);
      }
 };

 useEffect(() => {
    window.addEventListener("scroll", arrowScroll, true);

    return () => {
      window.removeEventListener("scroll", arrowScroll, true); 
    } 
  }, []);

  function handleShow(tipo) {
    setTipoAtual(tipo);
  }

  function scrollTop() {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function createMarkup(text) {
    return {__html: text};
  }
  
  function MyComponent(text) {
    return <div dangerouslySetInnerHTML={createMarkup(text)} />;
  }

  return (
    <>
      <Particles />
      <Header />
      
      <ArrowScroll onClick={()=> scrollTop()} arrowScroll={showScroll} style={{display: showScroll ? 'block' : 'none'}}/>

      <Section id="home">
        <H1>
          Building the
          <br />
          your&nbsp;
          <Typewriter
            options={{
              loop: true,
              speed: 5000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("idea!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("future!")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </H1>
      </Section>

      <Section id="about" style={{ background: "#363636" }}>
        <Profile>
          <img src={photo} alt="Pedro Freire" />
          <div>
            <h2>Hello, my name is Pedro!</h2>
            <p>
              Well, I'm 26 years old, I have a bachelor's degree in Information
              Systems from UniRedentor.
              <br />
              <br />I am a Systems Analyst at the UniRedentor Institution (
              <a
                href="http://www.redentor.edu.br"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                www.redentor.edu.br
              </a>
              ), and I work directly with the Front / Back-end.
            </p>
            <p>
              I always try to do my best for the projects I'm involved in, I'm
              competent, honest and I'm constantly learning.
            </p>
          </div>
        </Profile>
      </Section>

      <Section id="projects">
        <h2>Check out some of my works</h2>
        <ul className="btns-search">
          <li>
            <BtnSearch onClick={() => handleShow("all")}>All</BtnSearch>
          </li>
          <li>
            <BtnSearch onClick={() => handleShow("site")}>
              Sites
            </BtnSearch>
          </li>
          <li>
            <BtnSearch onClick={() => handleShow("system")}>
              Systems
            </BtnSearch>
          </li>
        </ul>
        <Projetos>
          {projetosAtuais.map((projeto) => (
            <div key={projeto.nome}>
              <img src={projeto.img} alt={projeto.nome} />
              <div>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="about-project">
                    <h3>{projeto.nome}</h3>
                    <p>
                      {projeto.languages.map((language) => (
                        <span>{language}</span>
                      ))}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Projetos>
      </Section>

      <Section id="resume" style={{ background: "#363636" }}>
        <h2 style={{ paddingTop: "40px" }}>Resume</h2>

        <Resume>
          <div>
            <h2>
              <span>Education</span>
            </h2>
          </div>
          <div>
            {educations.map((education) => (
              <div key={education.location}>
                <h3>{education.location}</h3>
                <p>{education.text}</p>
                <p>{education.graduation}</p>
              </div>
            ))}
          </div>
        </Resume>

        <hr
          style={{
            width: `calc(100% - 100px)`,
            border: "1px solid #6d7780",
            margin: "20px 0",
            maxWidth: "1020px",
          }}
        />

        <Resume>
          <div>
            <h2>
              <span>Works</span>
            </h2>
          </div>
          <div>
            {works.map((work) => (
              <div className="work" key={work.location}>
                <h3>{work.location}</h3>
                <p>{work.role}</p>
                <p>{work.about}</p>
              </div>
            ))}
          </div>
        </Resume>

        <hr
          style={{
            width: `calc(100% - 100px)`,
            border: "1px solid #6d7780",
            margin: "20px 0",
            maxWidth: "1020px",
          }}
        />

        <Resume>
          <div>
            <h2>
              <span>Skills</span>
            </h2>
          </div>
          <div>
            
            <ul className="skills">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <h3>{skill.name}</h3>
                  <p>{MyComponent(skill.description)} </p>
                </li>
              ))}
            </ul>
          </div>
        </Resume>
      </Section>

      <Section id="contact">
        <h2>Contact</h2>
        <Contato>
          <FormContact />

          <div className="side-contact" style={{width: "200px"}}> 
            <div>
              <p><svg style={{width: "15px", marginRight: "10px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg><a target="_blank" without rel="noopener noreferrer" className="link-contact" href="mailto:30freire@gmail.com">30freire@gmail.com</a></p>
              <p><svg style={{width: "15px", marginRight: "10px"}} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><a className="link-contact" target="_blank" without rel="noopener noreferrer" href="https://wa.me/5522981253123">+55(22)981253123</a></p></div>
          </div>
        </Contato>
      </Section>
    </>
  );
}

export default Menu;
