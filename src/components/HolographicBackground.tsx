import React from "react";
import Particles from "react-tsparticles";

type HolographicBackgroundProps = {
  height?: string;
  id?: string;
};
const HolographicBackground: React.FC<HolographicBackgroundProps> = ({
  height = "200vh",
  id = "tsparticles",
}) => {
  return (
    // @ts-ignore
    <Particles
      width={"100%"}
      height={height}
      id={id}
      options={{
        background: {
          color: {
            value: "#001220",
          },
        },
        style: {
          position: "relative",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              // opacity: 0.1,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#2dd5c4",
          },
          links: {
            blink: true,
            color: {
              value: "#2dd5c4",
            },
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: { min: 1, max: 4 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default React.memo(HolographicBackground);
