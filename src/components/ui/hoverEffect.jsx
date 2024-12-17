import React from "react";
import { cn } from "../utils/uiUtils.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useId } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 py-10 ",  className)}
    >
      {items.map((item, idx) => (
        <Link
        to={item?.link} 
        key={item?.id}
        target="_blank"
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-yellow-400/[0.5] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <CardDetails
            id={item.id}
            title={item.title}
            startDate={item.Startdate}
            faculties={item.faculties}
          />
        </Link>
      ))}
    </div>
  );
};


export const Card = ({ className, children }) => {
  return (
    <div
      data-aos="fade-up"
      className={cn(
        "l h-full w-full  bg-black relative border border-transparent  bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden",
        className
      )}
    >
      {/* Grid Background */}
      <Grid
        pattern={[
          [7, 1],
          [8, 2],
          [9, 3],
          [10, 4],
          [11, 5],
        ]}
        size={20}
      />
      
      {/* Card Content */}
      <div className="relative z-10">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-semibold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardDetails = ({ id, title, startDate, faculties, className }) => {
  return (
    <Card className={className}>
      <CardTitle>
         {title}
      </CardTitle>
      <p className="text-zinc-300 text-sm mt-2">
        <strong>Start Date:</strong> {startDate}
      </p>
      <div className="mt-4">
        <strong className="text-zinc-300">Professors:</strong>
        <ul className="mt-2">
          {faculties.map((faculty, idx) => (
            <li key={idx} className="text-zinc-400 text-sm leading-relaxed">
              <a
                href={faculty.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {faculty.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export const Grid = ({
  pattern,
  size,
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};
 
export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();
 
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}