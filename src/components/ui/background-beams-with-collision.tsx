"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  className,
}: {
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const beams = [
    {
      initialX: 0,
      translateX: 0,
      duration: 6,
      repeatDelay: 10,
      delay: 1,
      className: "h-8",
    },
    {
      initialX: 80,
      translateX: 80,
      duration: 5,
      repeatDelay: 12,
      delay: 0,
      className: "h-10",
    },
    {
      initialX: 160,
      translateX: 160,
      duration: 7,
      repeatDelay: 15,
      delay: 2,
      className: "h-6",
    },
    {
      initialX: 240,
      translateX: 240,
      duration: 4,
      repeatDelay: 10,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: 320,
      translateX: 320,
      duration: 8,
      repeatDelay: 117,
      delay: 3,
      className: "h-16",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 18,
      delay: 4,
      className: "h-6", // Retaining one of your original classNames
    },
    {
      initialX: 480,
      translateX: 480,
      duration: 7,
      repeatDelay: 10,
      delay: 0,
      className: "h-4",
    },
    {
      initialX: 560,
      translateX: 560,
      duration: 6,
      repeatDelay: 20,
      delay: 2,
      className: "h-10",
    },
    {
      initialX: 640,
      translateX: 640,
      duration: 3,
      repeatDelay: 10,
      delay: 4,
      className: "h-18",
    },
    {
      initialX: 720,
      translateX: 720,
      duration: 9,
      repeatDelay: 12,
      delay: 1,
      className: "h-14",
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 10,
      className: "h-20", // Retaining one of your original classNames
    },
    {
      initialX: 880,
      translateX: 880,
      duration: 5,
      repeatDelay: 15,
      delay: 0,
      className: "h-8",
    },
    {
      initialX: 960,
      translateX: 960,
      duration: 7,
      repeatDelay: 18,
      delay: 2,
      className: "h-12",
    },
    {
      initialX: 1040,
      translateX: 1040,
      duration: 4,
      repeatDelay: 10,
      className: "h-12", // Retaining one of your original classNames
    },
    {
      initialX: 1120,
      translateX: 1120,
      duration: 6,
      repeatDelay: 18,
      delay: 1,
      className: "h-16",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 10,
      delay: 2,
      className: "h-6", // Retaining one of your original classNames
    },
    {
      initialX: 1280,
      translateX: 1280,
      duration: 8,
      repeatDelay: 21,
      delay: 0,
      className: "h-20",
    },
    {
      initialX: 1360,
      translateX: 1360,
      duration: 5,
      repeatDelay: 15,
      delay: 3,
      className: "h-10",
    },
    {
      initialX: 1440,
      translateX: 1440,
      duration: 7,
      repeatDelay: 10,
      delay: 1,
      className: "h-14",
    },
    {
      initialX: 1520,
      translateX: 1520,
      duration: 4,
      repeatDelay: 12,
      delay: 0,
      className: "h-8",
    },
    {
      initialX: 1600,
      translateX: 1600,
      duration: 9,
      repeatDelay: 10,
      delay: 2,
      className: "h-24",
    },
    {
      initialX: 1680,
      translateX: 1680,
      duration: 6,
      repeatDelay: 10,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: 1760,
      translateX: 1760,
      duration: 7,
      repeatDelay: 15,
      delay: 3,
      className: "h-18",
    },
    {
      initialX: 1840,
      translateX: 1840,
      duration: 5,
      repeatDelay: 12,
      delay: 0,
      className: "h-10",
    },
    {
      initialX: 1920,
      translateX: 1920,
      duration: 8,
      repeatDelay: 10,
      delay: 1,
      className: "h-22",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen md:h-screen bg-linear-to-b from-black to-[#232323] relative flex items-center w-screen min-w-screen justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-screen min-w-screen inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
  // eslint-disable-next-line
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

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

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }

      animationFrameId = requestAnimationFrame(checkCollision);
    };

    animationFrameId = requestAnimationFrame(checkCollision);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const resetTimeout = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [collision]);

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
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-linear-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
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
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-linear-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{
            x: span.initialX,
            y: span.initialY,
            opacity: 1,
            scale: 0.5,
          }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
            scale: Math.random() * 1.5 + 0.5,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${
              Math.random() > 0.5 ? "indigo" : "purple"
            } 0%, #a855f7 100%)`,
          }}
        />
      ))}
    </div>
  );
};
