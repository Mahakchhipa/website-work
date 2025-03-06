"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticleAnimation = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  useEffect(() => {
    // This code will run after the component has mounted (client-side)
    if (typeof window !== "undefined") {
    const handleLoad = () => {
      const canvas = document.querySelector("#tsparticles canvas");
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }
    };

    // Simulating window.onload
    window.addEventListener('load', handleLoad);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }
  }, []);


  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#1E2F97",
      //   },
      // },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      style: {
        position: "absolute",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "connect",
          },
          onClick: {
            enable: true,
            mode: "push", // Use push to scatter particles
          },
          onHover: {
            enable: true,
            mode: "grab", // Optionally use remove to simulate scatter
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 20,
            opacity: 0.8,
            size: 10,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },

          grab: {
            distance: 200,
            links: {
              opacity: 1,
            },
          },
          push: {
            particles_nb: 10, // Number of particles to push when clicking
          },
          remove: {
            particles_nb: 10, // Number of particles to remove
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 600,
          },
          value: 100,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticleAnimation;