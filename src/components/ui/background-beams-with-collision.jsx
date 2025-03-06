import { cn } from "../utils/uiUtils.tsx";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  from = "CE",
}) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 5,
      repeatDelay: 2,
      delay: 0.5,
    },
    {
      initialX: 150,
      translateX: 150,
      duration: 4.5,
      repeatDelay: 1,
      delay: 0.2,
      className: "h-8",
    },
    {
      initialX: 300,
      translateX: 300,
      duration: 6,
      repeatDelay: 1.5,
      delay: 1,
    },
    {
      initialX: 450,
      translateX: 450,
      duration: 5.5,
      repeatDelay: 2,
      delay: 0.7,
      className: "h-10",
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 1,
      delay: 0.3,
    },
    {
      initialX: 750,
      translateX: 750,
      duration: 4,
      repeatDelay: 1.2,
      delay: 0.8,
      className: "h-16",
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 5,
      repeatDelay: 2,
      className: "h-6",
    },
    {
      initialX: 250,
      translateX: 250,
      duration: 3.5,
      repeatDelay: 1.8,
      delay: 1.2,
      className: "h-12",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 4,
      repeatDelay: 1.5,
      delay: 0.5,
    },
    {
      initialX: 550,
      translateX: 550,
      duration: 6.5,
      repeatDelay: 2.2,
      delay: 1.5,
      className: "h-7",
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 7,
      repeatDelay: 1,
      className: "h-20",
    },
    {
      initialX: 950,
      translateX: 950,
      duration: 5.5,
      repeatDelay: 1.7,
      delay: 0.9,
      className: "h-14",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 1.3,
      className: "h-12",
    },
    {
      initialX: 1150,
      translateX: 1150,
      duration: 3.8,
      repeatDelay: 1.6,
      delay: 1.1,
      className: "h-9",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 4.5,
      repeatDelay: 1.2,
      delay: 0.6,
      className: "h-6",
    },
    {
      initialX: 1350,
      translateX: 1350,
      duration: 5.2,
      repeatDelay: 1.9,
      delay: 1.3,
      className: "h-11",
    },
    {
      initialX: 1450,
      translateX: 1450,
      duration: 3.8,
      repeatDelay: 1.7,
      delay: 1.3,
      className: "h-11",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        " flex items-center w-full justify-center overflow-hidden absolute inset-0",
        className
      )}
      style={{ height: "100%" }}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          isMobile={isMobile}
          from={from}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-gray-900 w-full inset-x-0 pointer-events-none h-1"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions = {}, isMobile, from }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    // Determine gradient colors based on the "from" prop
    const beamGradientClass =
      from === "IC"
        ? "bg-gradient-to-t from-pink-400 via-pink-500 to-transparent"
        : from === "Team"
        ? "bg-gradient-to-t from-yellow-400 via-yellow-500 to-transparent"
        : "bg-gradient-to-t from-purple-400 via-purple-500 to-transparent";

    // Determine explosion gradient colors based on the "from" prop
    const explosionGradientClass =
      from === "IC"
        ? "from-transparent via-pink-500 to-transparent"
        : from === "Team"
        ? "from-transparent via-yellow-500 to-transparent"
        : "from-transparent via-purple-500 to-transparent";

    const particleGradientClass =
      from === "IC"
        ? "from-pink-400 via-pink-500"
        : from === "Team"
        ? "from-yellow-400 via-yellow-500"
        : "from-purple-400 via-purple-500";

    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          // Check if the beam has reached the bottom of the container
          // Adjusted collision detection to be more precise
          if (beamRect.bottom >= containerRect.top - 5) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = containerRect.top - parentRect.top;

            setCollision({
              detected: true,
              coordinates: {
                x: relativeX,
                y: relativeY,
              },
            });
            setCycleCollisionDetected(true);
          }
        }
      };

      const animationInterval = setInterval(checkCollision, 20);

      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 1500);

        setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 1600);
      }
    }, [collision]);

    // Calculate duration based on device type - slow down for mobile
    const getDuration = () => {
      const baseDuration = beamOptions.duration || 8;
      // Increase duration by 2x for mobile (slower speed)
      return isMobile ? baseDuration * 2 : baseDuration;
    };

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY:
                beamOptions.translateY || (isMobile ? "7000px" : "3000px"), //change this height when you want to change the height of the beam
              translateX: beamOptions.translateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: getDuration(),
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={cn(
            "absolute left-0 top-20 m-auto h-14 w-px rounded-full",
            beamGradientClass,
            beamOptions.className
          )}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              className=""
              gradientClass={explosionGradientClass}
              particleGradientClass={particleGradientClass}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ gradientClass, particleGradientClass, ...props }) => {
  const spans = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 100 - 50),
    directionY: Math.floor(Math.random() * -60 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn(
          "absolute -inset-x-10 top-0 m-auto h-3 w-16 rounded-full bg-gradient-to-r blur-sm",
          gradientClass
        )}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1, scale: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.8, ease: "easeOut" }}
          className={cn(
            "absolute h-1 w-1 rounded-full bg-gradient-to-b",
            particleGradientClass
          )}
        />
      ))}
    </div>
  );
};
