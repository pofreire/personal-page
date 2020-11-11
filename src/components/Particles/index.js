import React, { Component } from "react";

import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            shape: {
              type: "circle"
            },
            number: {
              value: 30,
              density: {
                enable: false,
                value_area: 800
              }
            },
            color: {
              value: "#34bbff"
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#ffffff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          retina_detect: false,
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            },
            mouse: {}
          }
        }}
        style={{ position: "absolute", background: "#0d0c0d", zIndex: 1 }}
      />
    );
  }
}
export default App;
